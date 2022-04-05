import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';
import { ConnectHistoryComponent } from './components/connect-history/connect-history.component';
import { ConnectNewComponent } from './components/connect-new/connect-new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from '../neta/containers/connect/connect.component';
import { ConnectHomeComponent } from './components/connect-home/connect-home.component';
import { TicketOptionsComponent } from './components/ticket-options/ticket-options.component';
import { TicketSummaryComponent } from './components/ticket-summary/ticket-summary.component';
import { AdminDashboardHomeComponent } from './containers/admin-dashboard-home/admin-dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectComponent,
    children: [
      {
        path: '',
        redirectTo: 'connect-new',
        pathMatch: 'full'
      },
      {
        path: 'connect-home',
        component: ConnectHomeComponent,
        data: { title: 'app.connect.menu.connect-home' },
      },
      {
        path: 'connect-history',
        redirectTo: 'connect-history/defaultID',
        pathMatch: 'full'
      },
      {
        path: 'connect-history/:id',
        component: ConnectHistoryComponent,
        data: { title: 'app.connect.menu.connect-history' }
      },
      {
        path: 'connect-new',
        component: ConnectNewComponent,
        data: { title: 'app.connect.menu.connect-new' },
        
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ConnectNewComponent,
            data: { title: 'app.connect.menu.connect-home' },
          },
          {
            path: 'options',
            component: ConnectNewComponent,
            data: { title: 'app.connect.menu.connect-history' }
          },
          {
            path: 'payment',
            component: ConnectNewComponent,
            data: { title: 'app.connect.menu.connect-new' }
          },
          {
            path: 'summary',
            component: ConnectNewComponent,
            data: { title: 'app.connect.menu.connect-new' }
          }
        ]
      },
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
export class DashboardRoutingModule { }
