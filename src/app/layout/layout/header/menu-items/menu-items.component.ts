import { Component } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
