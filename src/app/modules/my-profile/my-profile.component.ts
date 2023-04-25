import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { PersonalDetailModel } from '@shared/models/personal-detail.model';
import { PersonalDetailFormComponent } from './components/personal-detail-form/personal-detail-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  @ViewChild('personalForm') personalDetailForm!: PersonalDetailFormComponent;
  @ViewChild('passwordForm') passwordForm!: ResetPasswordFormComponent;

  formsAreInvalid = false;
  user: UserModel | null;
  personalDetail: PersonalDetailModel;

  isCollapsed = true;
  isHelpCollapsed = true;
  isLegalCollapsed = true;

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

  onSubmit(){
    if(this.personalDetailForm.personalDetailFormGroup.invalid || this.passwordForm.passwordForm.invalid){
      this.formsAreInvalid = true;
      return;
    }
    this.formsAreInvalid = false;

    const personalDetails = this.personalDetailForm.personalDetailFormGroup.value;
    const password = this.passwordForm.f["newPassword"].value;

    console.log(personalDetails);
    console.log(password);

    //To do
    // Hit the api and save the changes
  }

  logout() {
    this.authService.logout();
  }
}
