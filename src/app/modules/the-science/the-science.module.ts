import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheScienceComponent } from './the-science.component';
import { SharedModule } from '@shared/shared.module';
import { TheScienceRoutingModule } from './the-science-routing.module';



@NgModule({
  declarations: [
    TheScienceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TheScienceRoutingModule
  ]
})
export class TheScienceModule { }
