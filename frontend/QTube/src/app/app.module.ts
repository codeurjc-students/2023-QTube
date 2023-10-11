import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationBarComponent } from './shared/components/bars/navigation-bar/navigation-bar.component';
import { BrandComponent } from './shared/components/brand/brand.component';
import { SearchBarComponent } from './shared/components/form/search-bar/search-bar.component';
import { RoundedButtonComponent } from './shared/components/buttons/rounded-button/rounded-button.component';
import { ProfileButtonComponent } from './shared/components/buttons/profile-button/profile-button.component';
import { LoginButtonComponent } from './shared/components/buttons/login-button/login-button.component';
import { DrawerHeaderComponent } from './shared/components/bars/drawer/drawer-header/drawer-header.component';
import { LoginCtaComponent } from './shared/components/cta/login-cta/login-cta.component';
import { SmallLoginCtaComponent } from './shared/components/cta/small-login-cta/small-login-cta.component';
import { BarButtonComponent } from './shared/components/buttons/bar-button/bar-button.component';
import { MobileBarComponent } from './shared/components/bars/mobile-bar/mobile-bar.component';
import { DrawerSeparatorComponent } from './shared/components/bars/drawer/drawer-separator/drawer-separator.component';
import { DrawerComponent } from './shared/components/bars/drawer/drawer.component';
import { FloatingLabelInputComponent } from './shared/components/form/floating-label-input/floating-label-input.component';
import { DefaultButtonComponent } from './shared/components/buttons/default-button/default-button.component';
import { VideoContainerComponent } from './shared/components/video/video-container/video-container.component';
import { VideoListComponent } from './shared/components/video/video-list/video-list.component';
import { DefaultScreenComponent } from './shared/components/screens/default-screen/default-screen.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { BarsScreenComponent } from './shared/components/screens/bars-screen/bars-screen.component';
import { FormScreenComponent } from './shared/components/screens/form-screen/form-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BrandComponent,
    SearchBarComponent,
    RoundedButtonComponent,
    ProfileButtonComponent,
    LoginButtonComponent,
    DrawerHeaderComponent,
    LoginCtaComponent,
    SmallLoginCtaComponent,
    BarButtonComponent,
    MobileBarComponent,
    DrawerSeparatorComponent,
    DrawerComponent,
    FloatingLabelInputComponent,
    DefaultButtonComponent,
    VideoContainerComponent,
    VideoListComponent,
    DefaultScreenComponent,
    ErrorComponent,
    BarsScreenComponent,
    FormScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
