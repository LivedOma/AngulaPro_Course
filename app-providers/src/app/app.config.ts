import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CourseService } from './course.service';
import { LogService } from './log.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // {
    //   provide: CourseService,
    //   useClass: CourseService
    //   //useValue: new CourseService()
    // }
    // cuando la propiedad provide y el nombre de la clase son iguales se puede simplificar a:
    CourseService,
    LogService,

    {
      provide: 'API_URL',
      useValue: 'https://api.example.com'
    },
    {
      provide: 'CURRENT_ENVIRONMENT',
      useValue: 'production'
    },
    {
      provide: 'API_VERSION',
      useValue: '1.0.0'
    },
    {
      provide: 'VALOR',
      useFactory: () => {
        return "EL VALOR";
      }
    },
    {
      provide: 'ENVIRONMENT',
      useFactory: (current: string) => {

        if(current === 'production')
          return "PRODUCTION"

        if(current === 'development')
          return "DEVELOPMENT";

        return "UNKNOWN";
      },
      deps: ['CURRENT_ENVIRONMENT']
    }
  ]
};
