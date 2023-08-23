import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class Chart1 extends Component {
  componentDidMount() {
    let root1 = am5.Root.new("chartdiv1");

    root1._logo.dispose();
    root1.setThemes([am5themes_Animated.new(root1)]);

    let chart = root1.container.children.push(
      am5xy.XYChart.new(root1, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root1.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        date: "12/16",
        moring: 1,
        evening: 1,
        night: 1,
      },
      {
        date: "12/17",
        moring: 0,
        evening: 1,
        night: 0,
      },
      {
        date: "12/18",
        moring: 1,
        evening: 0,
        night: 1,
      },
      {
        date: "12/19",
        moring: 1,
        evening: 1,
        night: 1,
      },
      {
        date: "12/20",
        moring: 0,
        evening: 0,
        night: 0,
      },
      {
        date: "12/21",
        moring: 0,
        evening: 0,
        night: 0,
      },
      {
        date: "12/22",
        moring: 0,
        evening: 0,
        night: 0,
      },
    ];

    // Create Y-axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root1, {
        categoryField: "date",
        renderer: am5xy.AxisRendererX.new(root1, {}),
        tooltip: am5.Tooltip.new(root1, {}),
      })
    );

    // Create X-Axis
    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root1, {
        min: 0,
        renderer: am5xy.AxisRendererY.new(root1, {}),
      })
    );

    let legend = chart.children.push(
      am5.Legend.new(root1, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    function makeSeries(name, fieldName) {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root1, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: "date",
        })
      );

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        tooltipY: am5.percent(10),
      });
      series.data.setAll(data);

      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root1, {
          sprite: am5.Label.new(root1, {
            text: "{valueY}",
            fill: root1.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true,
          }),
        });
      });

      legend.data.push(series);
    }

    makeSeries("아침", "moring");
    makeSeries("점심", "evening");
    makeSeries("저녁", "night");

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root1, {}));

    this.root1 = root1;
  }

  componentWillUnmount() {
    if (this.root1) {
      this.root1.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv1" style={{ width: "100%"}}></div>
    );
  }
}

export default Chart1;

