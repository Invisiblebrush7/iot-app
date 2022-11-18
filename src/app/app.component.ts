import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { User } from './shared/interfaces/user';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'leany-app';
  @Input() sidenavOpened: boolean = true;
  shouldNavbarBeShowned: boolean = false;

  user: User = {
    username: '',
    email: '',
    password: '',
    records: [],
    typeOfUser: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  navbarToggle() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  ngOnInit(): void {
    this.user = this.apiService.currentUser;
    if (this.user && this.user.email === '') {
      this.router.navigate(['login'], {});
    } else {
      this.shouldNavbarBeShowned = true;
      this.router.navigate([''], {});
      console.log(this.user);
    }
  }
}
