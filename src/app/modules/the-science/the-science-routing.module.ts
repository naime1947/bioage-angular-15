import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheScienceComponent } from './the-science.component';


const routes: Routes = [
  {
    path: '',
    component: TheScienceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheScienceRoutingModule {}
