import { Component, OnInit } from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  user: UserModel | null;
  constructor(private authService: AuthService) {
    this.user = authService.getUser();
  }

  ngOnInit(): void {}
}
