import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyProfileComponent } from "./my-profile.component";
import { CloseAccountComponent } from "./pages/close-account/close-account.component";
import { ManageAccountComponent } from "./pages/manage-account/manage-account.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";

const routes:Routes = [
  {
    path: '',
    component: MyProfileComponent
  },
  {
    path: 'manage-account',
    component: ManageAccountComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'close-account',
    component: CloseAccountComponent
  }
]


@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyProfileRoutingModule{}
