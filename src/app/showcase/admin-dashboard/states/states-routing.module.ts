import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstituenciesHomeComponent } from './components/constituencies-home/constituencies-home.component';
import { ConstituenciesComponent } from './components/constituencies/constituencies.component';
import { ConstituencyDetailsComponent } from './components/constituency-details/constituency-details.component';
import { ConstituencyHomeComponent } from './components/constituency-home/constituency-home.component';
import { DistrictDetailsComponent } from './components/district-details/district-details.component';
import { DistrictsHomeComponent } from './components/districts-home/districts-home.component';
import { DistrictsComponent } from './components/districts/districts.component';
import { StateDetailsComponent } from './components/state-details/state-details.component';
import { StatesHomeComponent } from './components/states-home/states-home.component';
import { StatesComponent } from './components/states/states.component';
import { VillagesDetailsComponent } from './components/villages-details/villages-details.component';
import { VillagesHomeComponent } from './components/villages-home/villages-home.component';
import { VillagesComponent } from './components/villages/villages.component';

const routes: Routes = [
  {
    path: '',
    component: StatesHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-states',
        pathMatch: 'full'
      },
      {
        path: 'all-states',
        component: StatesComponent
      },
      // {
      //   path: 'all-states',
      //   loadChildren: () =>
      //     import('./prime-table/app.module').then((m) => m.PrimeTableModule),
      // },
      {
        path: 'state/:id',
        component: DistrictsHomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'all-districts',
            pathMatch: 'full'
          },
          {
            path: 'all-districts',
            component: DistrictsComponent
          },
          {
            path: 'district/:id',
            component: ConstituenciesHomeComponent,
            children: [
              {
                path: '',
                redirectTo: 'all-constituencies',
                pathMatch: 'full'
              },
              {
                path: 'all-constituencies',
                component: ConstituenciesComponent
              },
              {
                path: 'constituency/:id',
                component: VillagesHomeComponent,
                children: [
                  {
                    path: '',
                    redirectTo: 'all-villages',
                    pathMatch: 'full'
                  },
                  {
                    path: 'all-villages',
                    component: VillagesComponent
                  },
                  {
                    path: 'village/:id',
                    component: VillagesDetailsComponent,
                    data: { title: 'app.connect.menu.connect-new' },
                  },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
  // {
  //   path: 'states',
  //   component: StatesComponent
  // },
  // {
  //   path: ':id',
  //   component:  StateDetailsComponent,
  //   data: { title: 'app.connect.menu.connect-new' },
  // },
  // {
  //   path: ':id',
  //   loadChildren: () =>
  //     import('./../components/state-details').then((m) => m.StatesModule),
  //   data: { title: 'app.connect.menu.connect-new' },
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesRoutingModule { }
