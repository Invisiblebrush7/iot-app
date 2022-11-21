import { Injectable } from '@angular/core';
import { Record } from '../interfaces/record';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInfoService {
  constructor(private authService: AuthService) {}

  currentUser: any;

  getRecordsFromUser(): Array<any> {
    // Returns the array of records from user
    this.authService.getcurrentAuthUser().then((user) => {
      this.currentUser = user;
    });

    // return this.currentUser.records;
    return [
      {
        fuerza: Math.floor(Math.random() * 10.0),
        velocidad: Math.floor(Math.random() * 10.0),
        acX: Math.floor(Math.random() * 10.0),
        acY: Math.floor(Math.random() * 10.0),
        createdAt: this.randomDate(new Date(2012, 0, 1), new Date()),
      },
      {
        fuerza: Math.floor(Math.random() * 10.0),
        velocidad: Math.floor(Math.random() * 10.0),
        acX: Math.floor(Math.random() * 10.0),
        acY: Math.floor(Math.random() * 10.0),
        createdAt: this.randomDate(new Date(2012, 0, 1), new Date()),
      },
      {
        fuerza: Math.floor(Math.random() * 10.0),
        velocidad: Math.floor(Math.random() * 10.0),
        acX: Math.floor(Math.random() * 10.0),
        acY: Math.floor(Math.random() * 10.0),
        createdAt: this.randomDate(new Date(2012, 0, 1), new Date()),
      },
      {
        fuerza: Math.floor(Math.random() * 10.0),
        velocidad: Math.floor(Math.random() * 10.0),
        acX: Math.floor(Math.random() * 10.0),
        acY: Math.floor(Math.random() * 10.0),
        createdAt: this.randomDate(new Date(2012, 0, 1), new Date()),
      },
      {
        fuerza: Math.floor(Math.random() * 10.0),
        velocidad: Math.floor(Math.random() * 10.0),
        acX: Math.floor(Math.random() * 10.0),
        acY: Math.floor(Math.random() * 10.0),
        createdAt: this.randomDate(new Date(2012, 0, 1), new Date()),
      },
      {
        fuerza: Math.floor(Math.random() * 10.0),
        velocidad: Math.floor(Math.random() * 10.0),
        acX: Math.floor(Math.random() * 10.0),
        acY: Math.floor(Math.random() * 10.0),
        createdAt: this.randomDate(new Date(2012, 0, 1), new Date()),
      },
      {
        fuerza: Math.floor(Math.random() * 10.0),
        velocidad: Math.floor(Math.random() * 10.0),
        acX: Math.floor(Math.random() * 10.0),
        acY: Math.floor(Math.random() * 10.0),
        createdAt: this.randomDate(new Date(2012, 0, 1), new Date()),
      },
    ];
  }

  randomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  getForceData(): Array<any> {
    const records = this.getRecordsFromUser();
    const data = records.map((record: Record) => {
      return record['fuerza'];
    });
    return data;
  }
  getSpeedData(): Array<any> {
    const records = this.getRecordsFromUser();
    const data = records.map((record: Record) => {
      return record['velocidad'];
    });
    return data;
  }
  getAccXData(): Array<any> {
    const records = this.getRecordsFromUser();
    const data = records.map((record: Record) => {
      return record['acX'];
    });
    return data;
  }
  getAccYData(): Array<any> {
    const records = this.getRecordsFromUser();
    const data = records.map((record: Record) => {
      return record['acY'];
    });
    return data;
  }
  getCreatedAtData(): Array<any> {
    const records = this.getRecordsFromUser();
    const data = records.map((record: Record) => {
      return record['createdAt'];
    });
    return this.createBubbleData(data);
  }
  private countPerMonth(monthNum: number, dates: Array<any>): number {
    let initialValue = 0;

    dates.forEach((date) => {
      if (date.getMonth() === monthNum) {
        initialValue++;
      }
    });

    return initialValue;
  }

  getMaxValueForBubbleData(dataSet: any): number {
    let maxVal = 0;

    dataSet.forEach((dateObj: { x: number; y: number; r: number }) => {
      if (dateObj.y >= maxVal) {
        maxVal = dateObj.y;
      }
    });
    return maxVal;
  }

  private createBubbleData(datesArr: Array<Date>): Array<any> {
    // { x: 10, y: 10, r: 10 },
    const dates = datesArr;
    // x -> month
    // y -> count of trainings
    // r = y
    const monthsInDataSet = new Set();
    let dataSet = dates
      .map((date) => {
        let x = date.getMonth() + 1;
        let y = this.countPerMonth(date.getMonth(), dates);

        if (!monthsInDataSet.has(x)) {
          let dateObj = {
            x,
            y,
            r: y * 5,
          };
          monthsInDataSet.add(x);
          return dateObj;
        } else {
          return {};
        }
      })
      .filter((dateObj) => Object.keys(dateObj).length !== 0);
    return dataSet;
  }
}
