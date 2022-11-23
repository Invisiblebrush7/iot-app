import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sidebarIsOpened: boolean = true;
  email: string = '';
  displayName: string = '';

  @Output() sendSidebarStatusEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  sidenavToggle() {
    this.sidebarIsOpened = !this.sidebarIsOpened;
    this.sendSidebarStatusEvent.emit(this.sidebarIsOpened);
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  logout() {
    this.authService.logOut();
  }
  async setCurrentUser() {
    const { displayName, email, photoURL } = this.authService.getUserData();
    this.displayName = displayName;
    this.email = email;
  }
}
