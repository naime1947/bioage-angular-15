import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimersComponent } from './disclaimers.component';
import { DisclaimersRoutingModule } from './disclaimers-routing.module';



@NgModule({
  declarations: [
    DisclaimersComponent
  ],
  imports: [
    CommonModule,
    DisclaimersRoutingModule
  ]
})
export class DisclaimersModule { }
