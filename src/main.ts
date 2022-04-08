import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/showcase/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (environment.production) {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
  enableProdMode();
}

if (environment.test) {
  setTimeout(() => {
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
    enableProdMode();
      
  }, 5000);
}


