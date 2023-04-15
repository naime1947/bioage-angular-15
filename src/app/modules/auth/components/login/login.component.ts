import { Component } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  year = new Date().getFullYear();

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }
}
