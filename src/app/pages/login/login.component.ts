import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  email: string = '';
  password: string = '';

  async login() {
    await this.authService.login();
    this.router.navigate(['']);
  }

  async logout() {
    await this.authService.logOut();
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log('Valid form');
    } else {
      console.log('Invalid form');
    }
  }
}
