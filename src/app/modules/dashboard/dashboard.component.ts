import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: UserModel | null;
  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {}
}
