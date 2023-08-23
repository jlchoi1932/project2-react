import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";

class Donut2 extends Component {
  componentDidMount() {
    let root = am5.Root.new("Donut2");

    root._logo.dispose();
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
      })
    );

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      { value: 5, category: "미복용" },
      { value: 53, category: "복용" },
    ]);

    series.ticks.template.set("forceHidden", true);
    series.labels.template.set("forceHidden", true);

    let label = series.children.push(
      am5.Label.new(root, {
        text: "5/53",
        fontSize: 10,
        centerX: am5.percent(50),
        centerY: am5.percent(50),
      })
    );

    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);

    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return <div id="Donut2" style={{ width: "100%", height: "30vh" }}></div>;
  }
}

export default Donut2;
