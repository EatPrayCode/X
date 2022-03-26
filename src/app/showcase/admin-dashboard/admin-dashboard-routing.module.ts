import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardContainerComponent } from './containers/admin-dashboard-container/admin-dashboard-container.component';
import { AdminDashboardHomeComponent } from './containers/admin-dashboard-home/admin-dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardContainerComponent,
    data: { title: 'app.connect.menu.connect-new' },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'states',
        loadChildren: () =>
          import('./states/states.module').then((m) => m.StatesModule),
        data: { title: 'app.connect.menu.connect-new' },
      },
      {
        path: 'manage-netas',
        loadChildren: () =>
          import('./manage-netas/app.module').then((m) => m.PrimeTableModule),
        data: { title: 'app.connect.menu.connect-new' },
      },
      {
        path: 'home',
        component: AdminDashboardHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
