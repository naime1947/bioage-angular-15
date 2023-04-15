import { Component } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isCollapsed = true;
  constructor(private authService: AuthService) {}
  handleClick(dropdown: any) {
    console.log(dropdown);
  }

  logout() {
    this.authService.logout();
  }
}
