import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-log-out-succesfull',
  templateUrl: './log-out-succesfull.component.html',
  styleUrls: ['./log-out-succesfull.component.scss'],
})
export class LogOutSuccesfullComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logOut();
    this.router.navigate(['login']);
  }
}
