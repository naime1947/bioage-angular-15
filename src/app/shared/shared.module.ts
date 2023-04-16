import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSvgComponent } from './svg-icons/dashboard-svg/dashboard-svg.component';
import { MyResultSvgComponent } from './svg-icons/my-result-svg/my-result-svg.component';
import { ActionSvgComponent } from './svg-icons/action-svg/action-svg.component';
import { TheScienceSvgComponent } from './svg-icons/the-science-svg/the-science-svg.component';
import { DisclaimersSvgComponent } from './svg-icons/disclaimers-svg/disclaimers-svg.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';

import { UserSvgComponent } from './svg-icons/user-svg/user-svg.component';
import { SignOutSvgComponent } from './svg-icons/sign-out-svg/sign-out-svg.component';

@NgModule({
  declarations: [
    DashboardSvgComponent,
    MyResultSvgComponent,
    ActionSvgComponent,
    TheScienceSvgComponent,
    DisclaimersSvgComponent,
    UserSvgComponent,
    SignOutSvgComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    DashboardSvgComponent,
    MyResultSvgComponent,
    ActionSvgComponent,
    TheScienceSvgComponent,
    DisclaimersSvgComponent,
    UserSvgComponent,
    BsDropdownModule,
    CollapseModule,
    SignOutSvgComponent,
    PopoverModule,
    ModalModule
  ],
})
export class SharedModule {}
