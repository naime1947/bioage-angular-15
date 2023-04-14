import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSvgComponent } from './svg-cions/dashboard-svg/dashboard-svg.component';
import { MyResultSvgComponent } from './svg-cions/my-result-svg/my-result-svg.component';
import { ActionSvgComponent } from './svg-cions/action-svg/action-svg.component';
import { TheScienceSvgComponent } from './svg-cions/the-science-svg/the-science-svg.component';
import { DisclaimersSvgComponent } from './svg-cions/disclaimers-svg/disclaimers-svg.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    DashboardSvgComponent,
    MyResultSvgComponent,
    ActionSvgComponent,
    TheScienceSvgComponent,
    DisclaimersSvgComponent,
  ],
  imports: [CommonModule, BsDropdownModule.forRoot(), CollapseModule.forRoot()],
  exports: [
    DashboardSvgComponent,
    MyResultSvgComponent,
    ActionSvgComponent,
    TheScienceSvgComponent,
    DisclaimersSvgComponent,
    BsDropdownModule,
    CollapseModule,
  ],
})
export class SharedModule {}
