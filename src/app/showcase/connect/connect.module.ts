import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './../shared/shared.module';
import { environment } from '../../../environments/environment';
import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './containers/connect/connect.component';
import { ConnectService } from './services/connect.service';
import { ConnectLeftMenuComponent } from './components/connect-left-menu/connect-left-menu.component';
import { ConnectHomeComponent } from './components/connect-home/connect-home.component';
import { ConnectNewComponent } from './components/connect-new/connect-new.component';
import { ConnectHistoryComponent } from './components/connect-history/connect-history.component';
import { SidenavService } from './services/sidenav.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './../shared/demo-material-module';
import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';
import { TicketPaymentComponent } from './components/ticket-payment/ticket-payment.component';
import { TicketSummaryComponent } from './components/ticket-summary/ticket-summary.component';
import { TicketOptionsComponent } from './components/ticket-options/ticket-options.component';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/connect/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ConnectRoutingModule,
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
    ConnectComponent,
    ConnectLeftMenuComponent,
    ConnectHomeComponent,
    ConnectNewComponent,
    ConnectHistoryComponent,
    TicketInfoComponent,
    TicketPaymentComponent,
    TicketSummaryComponent,
    TicketOptionsComponent
  ],
  providers: [ConnectService, SidenavService]
})
export class ConnectModule {
  constructor() {}
}
