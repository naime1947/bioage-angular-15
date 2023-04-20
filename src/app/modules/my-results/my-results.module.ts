import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyResultsComponent } from './my-results.component';
import { MyResultsRoutingModule } from './my-results-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    MyResultsComponent
  ],
  imports: [
    CommonModule,
    MyResultsRoutingModule,
    SharedModule
  ]
})
export class MyResultsModule { }
