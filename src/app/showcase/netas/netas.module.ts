import { SharedModule } from './../shared/shared.module';
import { environment } from 'src/environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NetasRoutingModule } from './netas-routing.module';
import { NetasService } from './services/netas.service';
import { NetasPopularComponent } from './components/netas-popular/netas-popular.component';
import { NetasByStateComponent } from './components/netas-by-state/netas-by-state.component';
import { NetasByPartyComponent } from './components/netas-by-party/netas-by-party.component';
import { NetasByHistoryComponent } from './components/netas-by-history/netas-by-history.component';
import { NetasForYouComponent } from './components/netas-for-you/netas-for-you.component';
import { NetasComponent } from './containers/netas/netas.component';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/netas/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    NetasRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [
    NetasComponent,
    NetasPopularComponent,
    NetasByStateComponent,
    NetasByPartyComponent,
    NetasByHistoryComponent,
    NetasForYouComponent,
  ],
  providers: [NetasService]
})
export class NetasModule {
  constructor() {}
}
