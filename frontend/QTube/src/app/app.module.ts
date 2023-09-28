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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
