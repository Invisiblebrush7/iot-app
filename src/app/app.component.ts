import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Smart Racket';
  @Input() sidenavOpened: boolean = true;

  constructor() {}

  navbarToggle() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  ngOnInit(): void {}
}
