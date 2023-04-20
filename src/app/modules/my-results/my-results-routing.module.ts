import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResultsComponent } from './my-results.component';


const routes: Routes = [
  {
    path: '',
    component: MyResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyResultsRoutingModule {}
