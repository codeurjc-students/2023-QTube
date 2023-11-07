import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import {
  NgProgressModule,
  NG_PROGRESS_CONFIG,
  NgProgressComponent,
} from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModulesModule } from 'src/app/modules/modules.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    SweetAlert2Module.forRoot(),
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
