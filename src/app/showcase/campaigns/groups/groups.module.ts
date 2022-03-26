import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { AddGroupComponent } from './components/add-group/add-group.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    GroupsRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    GroupsComponent,
    GroupsListComponent,
    AddGroupComponent
  ],
  providers: []
})
export class GroupsModule {
  constructor() {}
}
