import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchBarComponent } from './shared/components/form/search-bar/search-bar.component';
import { LoginCtaComponent } from './shared/components/cta/login-cta/login-cta.component';
import { SmallLoginCtaComponent } from './shared/components/cta/small-login-cta/small-login-cta.component';
import { MobileBarComponent } from './shared/components/navigation/mobile-bar/mobile-bar.component';
import { DrawerComponent } from './shared/components/navigation/drawer/drawer.component';
import { FloatingLabelInputComponent } from './shared/components/form/floating-label-input/floating-label-input.component';
import { VideoContainerComponent } from './shared/components/video/video-container/video-container.component';
import { VideoListComponent } from './shared/components/video/video-list/video-list.component';
import { DefaultScreenComponent } from './shared/components/screens/default-screen/default-screen.component';
import { BarsScreenComponent } from './shared/components/screens/bars-screen/bars-screen.component';
import { FormScreenComponent } from './shared/components/screens/form-screen/form-screen.component';
import { DialogComponent } from './shared/components/navigation/dialog/dialog.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { TopBarComponent } from './shared/components/navigation/top-bar/top-bar.component';
import { ErrorScreenComponent } from './shared/components/screens/error-screen/error-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    LoginCtaComponent,
    SmallLoginCtaComponent,
    MobileBarComponent,
    DrawerComponent,
    FloatingLabelInputComponent,
    VideoContainerComponent,
    VideoListComponent,
    DefaultScreenComponent,
    BarsScreenComponent,
    FormScreenComponent,
    DialogComponent,
    ButtonComponent,
    TopBarComponent,
    ErrorScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
