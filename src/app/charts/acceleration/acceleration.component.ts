import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { AuthInfoService } from 'src/app/shared/services/auth-info.service';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-acceleration',
  templateUrl: './acceleration.component.html',
  styleUrls: ['./acceleration.component.scss'],
})
export class AccelerationComponent implements OnDestroy {
  constructor(private authInfo: AuthInfoService) {
    Chart.register(Annotation);
    this.records = this.authInfo.getRecordsFromUser();
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  destroyed = new Subject<void>();
  records: Array<any> = [];

  public lineChartType: ChartType = 'line';

  public lineChartData: ChartConfiguration['data'] = {
    // fill options  // 'start' | 'end' | 'origin' | 'stack' | 'shape'
    // {"fuerza": "9", "velocidad": "90", "acX":"1", "acY":"1", "acZ":"1", "id":"136", "createdAt:": "2022-11-16T..."}
    datasets: [
      {
        data: this.authInfo.getAccYData(),
        label: 'Aceleración en Y',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: this.authInfo.getAccXData(),
        label: 'Aceleración en X',
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
      x: {},
      'y-axis-0': {
        title: {
          text: 'Aceleración km/h',
          align: 'center',
          display: true,
        },
        position: 'left',
      },
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [],
      },
    },
  };
}
