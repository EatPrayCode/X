import { NetaService } from './services/neta.service';
import { NetaComponent } from './containers/neta/neta.component';
import { NetaRoutingModule } from './neta-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../../../environments/environment';
import { NetaHomeComponent } from './components/neta-home/neta-home.component';
import { NetaVideosComponent } from './components/neta-videos/neta-videos.component';
import { NetaOtherComponent } from './components/neta-other/neta-other.component';
import { NetaNewsComponent } from './components/neta-news/neta-news.component';
import { SharedModule } from '../shared/shared.module';

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
    NetaRoutingModule,
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
    NetaComponent,
    NetaHomeComponent,
    NetaVideosComponent,
    NetaOtherComponent,
    NetaNewsComponent,
  ],
  providers: [NetaService]
})
export class NetaModule {
  constructor() { }
}
