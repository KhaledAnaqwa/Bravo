import { formatNumber } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { bottom } from '@popperjs/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
@Component({
  selector: 'app-mixed-widget11',
  templateUrl: './mixed-widget11.component.html',
  changeDetection:ChangeDetectionStrategy.Default
})
export class MixedWidget11Component implements OnInit,OnChanges {
  @Input() chartColor: string = '';
  @Input() chartHeight: string;
  @Input() SalesData: any;
  
  
  chartOptions: any = {};
  SalesSum: any;

  constructor() {
    this.chartOptions = getChartOptions(this.chartHeight, this.chartColor);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.Update(changes.SalesData.currentValue)
  }
  Update(currentValue: any) {
    this.chartOptions.series =currentValue.data;
    this.chartOptions.xaxis.categories =currentValue.dates;
    this.SalesSum=currentValue.SalesSum
  }

  ngOnInit(): void {
    this.chartOptions = getChartOptions(this.chartHeight, this.chartColor);
    if (this.SalesData != null){
      this.Update(this.SalesData)
    }
    
  }
}

function getChartOptions(chartHeight: string, chartColor: string) {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const secondaryColor = getCSSVariableValue('--bs-gray-300');
  const baseColor = getCSSVariableValue('--bs-' + chartColor);

  return {
    series: [
      {
        name: 'This Week',
        data: [50, 60, 70, 80, 60, 50, 70],
      },
      {
        name: 'Last Week',
        data: [50, 60, 70, 80, 60, 50, 70],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
      },
    },
    legend: {
      show: bottom,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return 'NIS ' + formatNumber(Number(val), 'en-US', '1.0-0') + ' Sales';
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      padding: {
        top: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
