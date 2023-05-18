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
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { UserSvgComponent } from './svg-icons/user-svg/user-svg.component';
import { SignOutSvgComponent } from './svg-icons/sign-out-svg/sign-out-svg.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { AuthGuard } from './guards/auth.guard';
import { DateDueCounterComponent } from './components/date-due-counter/date-due-counter.component';
import { RangeViewerComponent } from './components/range-viewer/range-viewer.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { DownloadSvgComponent } from './svg-icons/download-svg/download-svg.component';
import { CompareOthersLikeYouChartComponent } from './charts/components/compare-others-like-you-chart/compare-others-like-you-chart.component';
import { BioageProgressChartComponent } from './charts/components/bioage-progress-chart/bioage-progress-chart.component';
import { FeedbackModalComponent } from './components/feedback-modal/feedback-modal.component';

@NgModule({
  declarations: [
    //svg icons
    DashboardSvgComponent,
    MyResultSvgComponent,
    ActionSvgComponent,
    TheScienceSvgComponent,
    DisclaimersSvgComponent,
    UserSvgComponent,
    SignOutSvgComponent,

    //components
    ReadMoreComponent,
    DateDueCounterComponent,
    RangeViewerComponent,
    LanguageSwitcherComponent,
    BreadcrumbsComponent,
    DownloadSvgComponent,
    CompareOthersLikeYouChartComponent,
    BioageProgressChartComponent,
    FeedbackModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    //svg icons
    DashboardSvgComponent,
    MyResultSvgComponent,
    ActionSvgComponent,
    TheScienceSvgComponent,
    DisclaimersSvgComponent,
    UserSvgComponent,
    DownloadSvgComponent,

    //bootstrap module
    BsDropdownModule,
    CollapseModule,
    SignOutSvgComponent,
    PopoverModule,
    ModalModule,
    TooltipModule,

    //components
    ReadMoreComponent,
    DateDueCounterComponent,
    RangeViewerComponent,
    LanguageSwitcherComponent,
    BreadcrumbsComponent,
    CompareOthersLikeYouChartComponent,
    BioageProgressChartComponent,
    FeedbackModalComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class SharedModule {}
