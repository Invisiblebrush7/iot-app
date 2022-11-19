import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private user: User = {
    username: '',
    email: '',
    password: '',
    records: [],
    typeOfUser: '',
  };

  constructor(private httpClient: HttpClient) {}

  getUserInfo(): Observable<Object> {
    return this.httpClient.get(environment.apiUrl + '/my_account');
  }

  get currentUser(): User {
    return this.user;
  }

  setCurrentUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
