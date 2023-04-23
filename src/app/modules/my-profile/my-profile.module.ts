import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { SharedModule } from '@shared/shared.module';
import { MyProfileRoutingModule } from './my-profile-routing.module';



@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyProfileRoutingModule
  ]
})
export class MyProfileModule { }
