import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_usaLow from "../map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import seniorjson from "../../component/senior.json";

class Map extends Component {
  componentDidMount() {
    let root = am5.Root.new("Map");
    root.setThemes([am5themes_Animated.new(root)]);

    // remove logo
    root._logo.dispose();

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        // projection: am5map.geoAlbersUsa(),
      })
    );

    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x297373),
    });

    let zoomOut = root.tooltipContainer.children.push(
      am5.Button.new(root, {
        x: am5.p100,
        y: 0,
        centerX: am5.p100,
        centerY: 0,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 12,
        paddingRight: 12,
        dx: -20,
        dy: 20,
        themeTags: ["zoom"],
        icon: am5.Graphics.new(root, {
          themeTags: ["button", "icon"],
          strokeOpacity: 0.7,
          draw: function (display) {
            display.moveTo(0, 0);
            display.lineTo(12, 0);
          },
        }),
      })
    );

    zoomOut.get("background").setAll({
      cornerRadiusBL: 40,
      cornerRadiusBR: 40,
      cornerRadiusTL: 40,
      cornerRadiusTR: 40,
    });
    zoomOut.events.on("click", function () {
      if (currentSeries) {
        currentSeries.hide();
      }
      chart.goHome();
      zoomOut.hide();
      currentSeries = regionalSeries.US.series;
      currentSeries.show();
    });
    zoomOut.hide();

    // =================================
    // Set up point series
    // =================================

    // Load senior data
    am5.net
      .load(
        "https://gist.githubusercontent.com/dbskfnd/e618b91a622b8efeb55ccc562c47864a/raw/23d9030fe1e6e42d6e43348d86b02f6aafa464e2/seniornumber.json"
      )
      .then(function (result) {
        let seniors = am5.JSONParser.parse(result.response);
        setupseniors(seniors);
      });

    let regionalSeries = {};
    let currentSeries;

    // Parses data and creats map point series for domestic and state-level
    function setupseniors(data) {
      console.log(data);

      // Init country-level series
      regionalSeries.US = {
        markerData: [],
        series: createSeries("seniors"),
      };

      // Set current series
      currentSeries = regionalSeries.US.series;

      // Process data
      am5.array.each(data.query_results, function (senior) {
        // Get senior data
        senior = {
          state: senior.MAIL_ST_PROV_C,
          long: am5.type.toNumber(senior.LNGTD_I),
          lat: am5.type.toNumber(senior.LATTD_I),
          location: senior.co_loc_n,
          city: senior.mail_city_n,
          count: am5.type.toNumber(senior.count),
        };

        // Process state-level data
        if (regionalSeries[senior.state] == undefined) {
          let statePolygon = getPolygon("KR-" + senior.state);
          if (statePolygon) {
            let centroid = statePolygon.visualCentroid();

            // Add state data
            regionalSeries[senior.state] = {
              target: senior.state,
              type: "state",
              name: statePolygon.dataItem.dataContext.name,
              count: senior.count,
              seniors: 1,
              state: senior.state,
              markerData: [],
              geometry: {
                type: "Point",
                coordinates: [centroid.longitude, centroid.latitude],
              },
            };
            regionalSeries.US.markerData.push(regionalSeries[senior.state]);
          } else {
            // State not found
            return;
          }
        } else {
          regionalSeries[senior.state].seniors++;
          regionalSeries[senior.state].count += senior.count;
        }

        // Process city-level data
        if (regionalSeries[senior.city] == undefined) {
          regionalSeries[senior.city] = {
            target: senior.city,
            type: "city",
            name: senior.city,
            count: senior.count,
            seniors: 1,
            state: senior.state,
            markerData: [],
            geometry: {
              type: "Point",
              coordinates: [senior.long, senior.lat],
            },
          };
          regionalSeries[senior.state].markerData.push(
            regionalSeries[senior.city]
          );
        } else {
          regionalSeries[senior.city].seniors++;
          regionalSeries[senior.city].count += senior.count;
        }

        // Process individual senior
        regionalSeries[senior.city].markerData.push({
          name: senior.location,
          count: senior.count,
          seniors: 1,
          state: senior.state,
          geometry: {
            type: "Point",
            coordinates: [senior.long, senior.lat],
          },
        });
      });
      console.log(regionalSeries.US.markerData);
      regionalSeries.US.series.data.setAll(regionalSeries.US.markerData);
    }

    // Finds polygon in series by its id
    function getPolygon(id) {
      let found;
      polygonSeries.mapPolygons.each(function (polygon) {
        if (polygon.dataItem.get("id") == id) {
          found = polygon;
        }
      });
      return found;
    }

    // Creates series with heat rules
    function createSeries(heatfield) {
      // Create point series
      let pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {
          valueField: heatfield,
          calculateAggregates: true,
        })
      );

      // Add senior bullet
      let circleTemplate = am5.Template.new(root);
      pointSeries.bullets.push(function () {
        let container = am5.Container.new(root, {});

        let circle = container.children.push(
          am5.Circle.new(
            root,
            {
              radius: 10,
              fill: am5.color(0x000000),
              fillOpacity: 0.7,
              cursorOverStyle: "pointer",
              tooltipText: "{name}:\n[bold]{seniors} seniors[/]",
            },
            circleTemplate
          )
        );

        let label = container.children.push(
          am5.Label.new(root, {
            text: "{seniors}",
            fill: am5.color(0xffffff),
            populateText: true,
            centerX: am5.p50,
            centerY: am5.p50,
            textAlign: "center",
          })
        );

        // Set up drill-down
        circle.events.on("click", function (ev) {
          // Determine what we've clicked on
          let data = ev.target.dataItem.dataContext;

          // No id? Individual senior - nothing to drill down to further
          if (!data.target) {
            return;
          }

          // Create actual series if it hasn't been yet created
          if (!regionalSeries[data.target].series) {
            regionalSeries[data.target].series = createSeries("count");
            regionalSeries[data.target].series.data.setAll(data.markerData);
          }

          // Hide current series
          if (currentSeries) {
            currentSeries.hide();
          }

          // Control zoom
          if (data.type == "state") {
            let statePolygon = getPolygon("KR-" + data.state);
            polygonSeries.zoomToDataItem(statePolygon.dataItem);
          } else if (data.type == "city") {
            chart.zoomToGeoPoint(
              {
                latitude: data.geometry.coordinates[1],
                longitude: data.geometry.coordinates[0],
              },
              64,
              true
            );
          }
          zoomOut.show();

          // Show new targert series
          currentSeries = regionalSeries[data.target].series;
          currentSeries.show();
        });

        return am5.Bullet.new(root, {
          sprite: container,
        });
      });

      // Add heat rule for circles
      pointSeries.set("heatRules", [
        {
          target: circleTemplate,
          dataField: "value",
          min: 10,
          max: 30,
          key: "radius",
        },
      ]);

      // Set up drill-down
      // TODO

      return pointSeries;
    }

    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return (
        <div
          className="flex80"
          id="Map"
          style={{ width: "100%", height: "35vh", marginBottom: "1rem" }}
        ></div>
    );
  }
}

export default Map;
