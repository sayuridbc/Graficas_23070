import { Component, OnInit } from '@angular/core';
import * as am5index from "@amcharts/amcharts5/index";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5themes_Animated from "@amcharts/amcharts5/themes/Animated";  // Note the import style change

@Component({
  selector: 'app-grafica-apilada',
  templateUrl: './grafica-apilada.component.html',
  styleUrls: ['./grafica-apilada.component.css']
})
export class GraficaApiladaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5index.Root.new("chartdiv");

    // Set themes (no need for .new())
    root.setThemes([
      am5themes_Animated
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0,
      layout: root.verticalLayout
    }));

    // Add scrollbar
    chart.set("scrollbarX", am5index.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    let data = [{
      "year": "2021",
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 1,
      "meast": 0.8,
      "africa": 0.4
    }, {
      "year": "2022",
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 0.5,
      "meast": 0.4,
      "africa": 0.3
    }, {
      "year": "2023",
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 0.3,
      "meast": 0.9,
      "africa": 0.5
    }];

    // Create axes
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true
    });
    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5index.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
      location: 1
    });

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      max: 100,
      numberFormat: "#'%'",
      strictMinMax: true,
      calculateTotals: true,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    // Add legend
    let legend = chart.children.push(am5index.Legend.new(root, {
      centerX: am5index.p50,
      x: am5index.p50
    }));

    // Add series
    function makeSeries(name: string, fieldName: string): void {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        valueYShow: "valueYTotalPercent",
        categoryXField: "year"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueYTotalPercent.formatNumber('#.#')}%",
        tooltipY: am5.percent(10)
      });
      series.data.setAll(data);

      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: "{valueYTotalPercent.formatNumber('#.#')}%",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5index.p50,
            centerX: am5index.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    }

    makeSeries("Europe", "europe");
    makeSeries("North America", "namerica");
    makeSeries("Asia", "asia");
    makeSeries("Latin America", "lamerica");
    makeSeries("Middle East", "meast");
    makeSeries("Africa", "africa");

    chart.appear(1000, 100);
  }
}
