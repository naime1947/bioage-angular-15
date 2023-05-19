import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoResultsComponent } from './no-results.component';

const routes: Routes = [
  {
    path: '',
    component: NoResultsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoResultsRoutingModule {}
