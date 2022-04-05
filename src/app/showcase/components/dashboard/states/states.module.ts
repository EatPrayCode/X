import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StatesRoutingModule } from './states-routing.module';
import { StatesComponent } from './components/states/states.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { StatesHomeComponent } from './components/states-home/states-home.component';
import { DistrictDetailsComponent } from './components/district-details/district-details.component';
import { DistrictsComponent } from './components/districts/districts.component';
import { DistrictsHomeComponent } from './components/districts-home/districts-home.component';
import { ConstituencyHomeComponent } from './components/constituency-home/constituency-home.component';
import { ConstituenciesComponent } from './components/constituencies/constituencies.component';
import { ConstituencyDetailsComponent } from './components/constituency-details/constituency-details.component';
import { ConstituenciesHomeComponent } from './components/constituencies-home/constituencies-home.component';
import { VillagesHomeComponent } from './components/villages-home/villages-home.component';
import { VillagesComponent } from './components/villages/villages.component';
import { VillagesDetailsComponent } from './components/villages-details/villages-details.component';
import { SharedModule } from 'src/app/showcase/shared/shared.module';
import { AdminDashboardHomeComponent } from '../containers/admin-dashboard-home/admin-dashboard-home.component';
import { StateDetailsComponent } from './components/state-details/state-details.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    StatesRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    StatesComponent,
    StateDetailsComponent,
    GroupsListComponent,
    StatesHomeComponent,
    DistrictDetailsComponent,
    DistrictsComponent,
    DistrictsHomeComponent,
    ConstituencyHomeComponent,
    ConstituenciesComponent,
    ConstituencyDetailsComponent,
    ConstituenciesHomeComponent,
    VillagesHomeComponent,
    VillagesComponent,
    VillagesDetailsComponent,
    AdminDashboardHomeComponent
  ],
  providers: []
})
export class StatesModule {
  constructor() {}
}
