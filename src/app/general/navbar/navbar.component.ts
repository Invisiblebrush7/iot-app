import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sidebarIsOpened: boolean = true;

  @Output() sendSidebarStatusEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  sidenavToggle() {
    this.sidebarIsOpened = !this.sidebarIsOpened;
    this.sendSidebarStatusEvent.emit(this.sidebarIsOpened);
  }

  constructor() {}

  ngOnInit(): void {}
}
// *ngIf="this.sidebarIsOpened"
