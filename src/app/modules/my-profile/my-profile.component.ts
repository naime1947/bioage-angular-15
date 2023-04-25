import { Component, OnInit } from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { PersonalDetailModel } from '@shared/models/personal-detail.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  user: UserModel | null;
  personalDetail: PersonalDetailModel;
  constructor(private authService: AuthService) {
    this.user = authService.getUser();
    this.personalDetail = {
      displayName: this.user?.displayName!,
      email: this.user?.email!,
      phone: this.user?.phone!,
      country: this.user?.country!
    }
  }

  ngOnInit(): void {}
}
