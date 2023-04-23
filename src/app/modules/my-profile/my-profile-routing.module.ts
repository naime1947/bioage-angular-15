import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyProfileComponent } from "./my-profile.component";
import { CloseAccountComponent } from "./pages/close-account/close-account.component";

const routes:Routes = [
  {
    path: '',
    component: MyProfileComponent
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
