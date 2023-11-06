import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import {
  NgProgressModule,
  NG_PROGRESS_CONFIG,
  NgProgressComponent,
} from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    NgProgressComponent,
  ],
  providers: [
    importProvidersFrom(NgProgressHttpModule, NgProgressRouterModule),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: NG_PROGRESS_CONFIG,
      useValue: {
        spinner: false,
        color: '#FF0000',
        speed: 250,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
