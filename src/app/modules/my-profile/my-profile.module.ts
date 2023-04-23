import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { SharedModule } from '@shared/shared.module';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { CloseAccountComponent } from './pages/close-account/close-account.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ManageAccountComponent } from './pages/manage-account/manage-account.component';
import { PersonalDetailFormComponent } from './components/personal-detail-form/personal-detail-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';



@NgModule({
  declarations: [
    MyProfileComponent,
    CloseAccountComponent,
    ResetPasswordComponent,
    ManageAccountComponent,
    PersonalDetailFormComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyProfileRoutingModule
  ]
})
export class MyProfileModule { }
