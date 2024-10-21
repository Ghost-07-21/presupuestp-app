import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IngresoServicio } from './ingresos/ingreso.servicio';
import { EgresoServicio } from './egresos/egreso.servicio';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), IngresoServicio, EgresoServicio]
};
