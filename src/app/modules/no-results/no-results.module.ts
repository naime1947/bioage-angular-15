import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NoResultsComponent } from './no-results.component';
import { NoResultsRoutingModule } from './no-results-routing.module';



@NgModule({
  declarations: [
    NoResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NoResultsRoutingModule
  ]
})
export class NoResultsModule { }
