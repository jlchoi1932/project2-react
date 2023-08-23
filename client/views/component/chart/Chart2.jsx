import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class Chart2 extends Component {
  componentDidMount() {
    let root = am5.Root.new("Chart2");

    root._logo.dispose();
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    chart.get("colors").set("step", 3);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.3,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );
    series.strokes.template.setAll({
      strokeWidth: 2,
      strokeDasharray: [3, 3],
    });

    // Set data
    let data = [
      {
        date: new Date(2022, 8, 1).getTime(),
        value: 0,
      },
      {
        date: new Date(2022, 8, 2).getTime(),
        value: 1,
      },
      {
        date: new Date(2022, 8, 3).getTime(),
        value: 1,
      },
      {
        date: new Date(2022, 8, 4).getTime(),
        value: 2,
      },
      {
        date: new Date(2022, 8, 5).getTime(),
        value: 3,
      },
      {
        date: new Date(2022, 8, 6).getTime(),
        value: 3,
      },
      {
        date: new Date(2022, 8, 7).getTime(),
        value: 7,
      },
      {
        date: new Date(2022, 8, 8).getTime(),
        value: 7,
      },
      {
        date: new Date(2022, 8, 9).getTime(),
        value: 8,
      },
      {
        date: new Date(2022, 8, 10).getTime(),
        value: 8,
      },
    ];

    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return <div id="Chart2" style={{ width: "100%", height: "15vh" }}></div>;
  }
}

export default Chart2;
