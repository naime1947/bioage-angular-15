import { Component, ViewChild } from '@angular/core';
import { PersonalDetailFormComponent } from '@modules/my-profile/components/personal-detail-form/personal-detail-form.component';
import { ResetPasswordFormComponent } from '@modules/my-profile/components/reset-password-form/reset-password-form.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  @ViewChild('resetPassword') passwordForm!: ResetPasswordFormComponent;

  onSubmit(){
    if(this.passwordForm.passwordFormGroup.invalid){
      return;
    }

    const newPassword = this.passwordForm.f['newPassword'].value;

    console.log(newPassword);

    //To do
    // Hit the api and save the changes
  }
}
