import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { SocialAccountsComponent } from './components/social-accounts/social-accounts.component';
import { CampaignsHomeComponent } from './containers/campaigns-home/campaigns-home.component';
import { ConnectComponent } from './containers/connect/connect.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectComponent,
    data: { title: 'app.connect.menu.connect-new' },
    children: [
      {
        path: '',
        redirectTo: 'groups',
        pathMatch: 'full'
      },
      // {
      //   path: 'groups',
      //   loadChildren: () =>
      //     import('../admin-dashboard/states/states.module').then((m) => m.StatesModule),
      //   data: { title: 'app.connect.menu.connect-new' },
      // },
      {
        path: 'social-accounts',
        component: SocialAccountsComponent,
        data: { title: 'app.connect.menu.connect-new' }
      },
      {
        path: 'campaigns',
        component: CampaignsComponent,
        data: { title: 'app.connect.menu.connect-new' }
      }
      // {
      //   path: '',
      //   redirectTo: 'groups/ALL',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'groups/:id',
      //   loadChildren: () =>
      //     import('./../campaign-manager/groups/groups.module').then((m) => m.GroupsModule),
      //   data: { title: 'app.connect.menu.connect-new' },
      // },
    ]
  },

  // {
  //   path: '',
  //   component: ConnectComponent,
  //   children: [

  //     // {
  //     //   path: 'groups/:id',
  //     //   component:  ContactsComponent,
  //     //   data: { title: 'app.connect.menu.connect-new' },
  //     // },
  //     // {
  //     //   path: 'social-accounts',
  //     //   component: SocialAccountsComponent,
  //     //   data: { title: 'app.connect.menu.connect-new' }
  //     // },
  //     // {
  //     //   path: 'campaigns',
  //     //   component: CampaignsComponent,
  //     //   data: { title: 'app.connect.menu.connect-new' }
  //     // }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
