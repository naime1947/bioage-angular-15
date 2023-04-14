import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSvgComponent } from './svg-cions/dashboard-svg/dashboard-svg.component';



@NgModule({
  declarations: [
    DashboardSvgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardSvgComponent
  ]
})
export class SharedModule { }
