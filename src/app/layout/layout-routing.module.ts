import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'my-results',
        loadChildren: () =>
          import('../modules/my-results/my-results.module').then((m) => m.MyResultsModule),
      },
      {
        path: 'actions',
        loadChildren: () =>
          import('../modules/actions/actions.module').then((m) => m.ActionsModule),
      },
      {
        path: 'the-science',
        loadChildren: () =>
          import('../modules/the-science/the-science.module').then((m) => m.TheScienceModule),
      },
      {
        path: 'desclaimers',
        loadChildren: () =>
          import('../modules/disclaimers/disclaimers.module').then((m) => m.DisclaimersModule),
      },
      {
        path: 'my-profile',
        loadChildren: () =>
          import('../modules/my-profile/my-profile.module').then((m) => m.MyProfileModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
