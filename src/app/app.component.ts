import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Smart Racket';
  @Input() sidenavOpened: boolean = true;

  shouldNavbarsBeOpened: boolean = false;

  event: any;

  constructor(public auth: AngularFireAuth, private router: Router) {}

  navbarToggle() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  ngOnInit(): void {
    this.event = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (
          event.url.includes('login') ||
          event.url.includes('sign_up') ||
          event.url.includes('logout')
        ) {
          this.shouldNavbarsBeOpened = false;
        } else {
          this.shouldNavbarsBeOpened = true;
        }
      }
    });
  }
}
