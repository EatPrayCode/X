import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StatesRoutingModule } from './states-routing.module';
import { StatesComponent } from './components/states/states.component';
import { SharedModule } from './../../shared/shared.module';
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

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    StatesRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    StatesComponent,
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
    VillagesDetailsComponent
  ],
  providers: []
})
export class StatesModule {
  constructor() {}
}
