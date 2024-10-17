import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HomeModule } from './home/home.module';


platformBrowserDynamic().bootstrapModule(HomeModule)
  .catch(err => console.error(err));
