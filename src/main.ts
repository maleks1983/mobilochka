import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import {AppModule} from "./app/app.module";
import {HeaderModule} from "./app/header/header.module";
import {FooterModule} from "./app/footer/footer.module";



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HeaderModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


platformBrowserDynamic().bootstrapModule(FooterModule)
  .catch(err => console.error(err));
