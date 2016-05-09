import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { DemoNg2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(DemoNg2AppComponent);
