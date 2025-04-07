import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core'; // За добавяне на модул
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appInterceptor } from './app.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([appInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withHashLocation() ),  // add withHashLocation() for reloud details page
    importProvidersFrom(BrowserAnimationsModule)
  ],
};
