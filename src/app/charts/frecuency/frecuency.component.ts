import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { AuthInfoService } from 'src/app/shared/services/auth-info.service';

@Component({
  selector: 'app-frecuency',
  templateUrl: './frecuency.component.html',
  styleUrls: ['./frecuency.component.scss'],
})
export class FrecuencyComponent implements OnInit {
  constructor(private authInfo: AuthInfoService) {}
  ngOnInit(): void {}

  dataSet: any = this.authInfo.getCreatedAtData();
  maxVal: number = this.authInfo.getMaxValueForBubbleData(this.dataSet);

  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {
        title: {
          text: 'Meses',
          align: 'center',
          display: true,
        },
        min: 0,
        max: 12,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        ticks: {
          stepSize: 1,
        },
        title: {
          text: 'Frecuencia',
          align: 'center',
          display: true,
        },
        position: 'left',
        min: 0,
        max: this.maxVal + 1,
      },
    },
  };
  public bubbleChartData: ChartData<'bubble'> = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        data: this.dataSet,
        label: 'Frecuencia',
        backgroundColor: [
          'red',
          'green',
          'blue',
          'purple',
          'yellow',
          'brown',
          'magenta',
          'cyan',
          'orange',
          'pink',
        ],
        borderColor: 'blue',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red',
      },
    ],
  };
}
