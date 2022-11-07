import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'leany-app';

  @Input() sidenavOpened: boolean = true;

  constructor() {}

  navbarToggle() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
