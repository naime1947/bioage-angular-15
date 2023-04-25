import { Component, ViewChild } from '@angular/core';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { PersonalDetailFormComponent } from '@modules/my-profile/components/personal-detail-form/personal-detail-form.component';
import { PersonalDetailModel } from '@shared/models/personal-detail.model';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent {
  @ViewChild('personalForm') personalDetailForm!: PersonalDetailFormComponent;

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

  onSubmit(){
    if(this.personalDetailForm.personalDetailFormGroup.invalid){
      return;
    }

    const personalDetails = this.personalDetailForm.personalDetailFormGroup.value;

    console.log(personalDetails);

    //To do
    // Hit the api and save the changes
  }
}
