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
      { fuerza: 1 },
      { fuerza: 2 },
      { fuerza: 3 },
      { fuerza: 4 },
      { fuerza: 5 },
      { fuerza: 6 },
      { fuerza: 7 },
    ];
  }
  getSpecificData(): Array<any> {
    const records = this.getRecordsFromUser();
    const data = records.map((record: Record) => {
      return record['fuerza'];
    });
    return data;
  }
}
