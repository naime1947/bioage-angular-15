import { Component } from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { PersonalDetailModel } from '@shared/models/personal-detail.model';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent {
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
}
