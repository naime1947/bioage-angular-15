import { Component } from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user: UserModel | null;
  dueDate = new Date("2023-11-16T12:00:00Z");
  constructor(private authService: AuthService){
    this.user = this.authService.getUser();
  }
}
