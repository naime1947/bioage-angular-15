import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSvgComponent } from './svg-cions/dashboard-svg/dashboard-svg.component';
import { MyResultSvgComponent } from './svg-cions/my-result-svg/my-result-svg.component';
import { ActionSvgComponent } from './svg-cions/action-svg/action-svg.component';
import { TheScienceSvgComponent } from './svg-cions/the-science-svg/the-science-svg.component';
import { DisclaimersSvgComponent } from './svg-cions/disclaimers-svg/disclaimers-svg.component';



@NgModule({
  declarations: [
    DashboardSvgComponent,
    MyResultSvgComponent,
    ActionSvgComponent,
    TheScienceSvgComponent,
    DisclaimersSvgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardSvgComponent,
    MyResultSvgComponent,
    ActionSvgComponent,
    TheScienceSvgComponent,
    DisclaimersSvgComponent
  ]
})
export class SharedModule { }
