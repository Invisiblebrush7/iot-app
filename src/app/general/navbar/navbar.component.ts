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
  currentUser: User | null = null;

  @Output() sendSidebarStatusEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  sidenavToggle() {
    this.sidebarIsOpened = !this.sidebarIsOpened;
    this.sendSidebarStatusEvent.emit(this.sidebarIsOpened);
  }

  constructor(private authService: AuthService) {
    this.setCurrentUser();
  }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  logout() {
    this.authService.logOut();
  }
  async setCurrentUser() {
    this.authService.getcurrentAuthUser().then((user) => {
      this.currentUser = user;
    });
  }
}
