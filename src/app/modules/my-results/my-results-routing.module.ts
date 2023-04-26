import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResultsComponent } from './my-results.component';
import { ResultComponent } from './pages/result/result.component';


const routes: Routes = [
  {
    path: '',
    component: MyResultsComponent,
  },
  {
    path: ':id',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyResultsRoutingModule {}
