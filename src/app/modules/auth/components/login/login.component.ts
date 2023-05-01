import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  year = new Date().getFullYear();

  constructor(private authService: AuthService, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Login - BioAge');
  }

  login() {
    this.authService.login();
  }
}
