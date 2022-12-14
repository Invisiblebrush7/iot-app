import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subject } from 'rxjs';

import { default as Annotation } from 'chartjs-plugin-annotation';
import { AuthInfoService } from 'src/app/shared/services/auth-info.service';

@Component({
  selector: 'app-income-chart',
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.scss'],
})
export class IncomeChartComponent implements OnDestroy {
  destroyed = new Subject<void>();

  records: Array<any> = [];

  constructor(private authInfo: AuthInfoService) {
    Chart.register(Annotation);
    this.records = this.authInfo.getRecordsFromUser();
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  public lineChartData: ChartConfiguration['data'] = {
    // fill options  // 'start' | 'end' | 'origin' | 'stack' | 'shape'
    // {"fuerza": "9", "velocidad": "90", "acX":"1", "acY":"1", "acZ":"1", "id":"136", "createdAt:": "2022-11-16T..."}
    datasets: [
      {
        data: this.authInfo.getForceData(),
        label: 'Fuerza',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        borderColor: 'rgba(55, 82, 214, 1)',
        pointBackgroundColor: 'rgba(55, 82, 214, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': {
        title: {
          text: 'Fuerza',
          align: 'center',
          display: true,
        },
        position: 'left',
      },
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          // {
          //   type: 'line',
          //   scaleID: 'x',
          //   value: 'March',
          //   borderColor: 'orange',
          //   borderWidth: 2,
          //   label: {
          //     display: true,
          //     position: 'center',
          //     color: 'orange',
          //     content: 'LineAnno',
          //     font: {
          //       weight: 'bold',
          //     },
          //   },
          // },
        ],
      },
    },
  };

  public lineChartType: ChartType = 'line';
}
