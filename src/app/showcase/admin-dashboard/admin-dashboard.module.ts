import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './../shared/shared.module';
import { environment } from '../../../environments/environment';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';

import { ConnectService } from './services/connect.service';
import { SidenavService } from './services/sidenav.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './../shared/demo-material-module';
import { NetasService } from './services/netas.service';
import { AdminDashboardContainerComponent } from './containers/admin-dashboard-container/admin-dashboard-container.component';
import { StateDetailsComponent } from './states/components/state-details/state-details.component';
import { GroupsListComponent } from './states/components/groups-list/groups-list.component';
import { AddGroupComponent } from './states/components/add-group/add-group.component';
import { AdminDashboardHomeComponent } from './containers/admin-dashboard-home/admin-dashboard-home.component';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/admin-dashboard/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    AdminDashboardRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    CommonModule,
    FlexLayoutModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    AdminDashboardContainerComponent,
    StateDetailsComponent,
    AddGroupComponent,
    AdminDashboardHomeComponent
  ],
  providers: [ConnectService, SidenavService, NetasService]
})
export class AdminDashboardModule {
  constructor() {}
}
