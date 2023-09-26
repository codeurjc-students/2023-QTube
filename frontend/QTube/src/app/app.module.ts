import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationBarComponent } from './shared/components/navigation-bar/navigation-bar.component';
import { BrandComponent } from './shared/components/brand/brand.component';
import { DrawerComponent } from './shared/components/drawer/drawer.component';
import { SearchBarComponent } from './shared/components/form/search-bar/search-bar.component';
import { RoundedButtonComponent } from './shared/components/buttons/rounded-button/rounded-button.component';
import { ProfileButtonComponent } from './shared/components/buttons/profile-button/profile-button.component';
import { DrawerButtonComponent } from './shared/components/drawer/drawer-button/drawer-button.component';
import { DrawerBarComponent } from './shared/components/drawer/drawer-bar/drawer-bar.component';
import { LoginButtonComponent } from './shared/components/buttons/login-button/login-button.component';
import { DrawerHeaderComponent } from './shared/components/drawer/drawer-header/drawer-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BrandComponent,
    DrawerComponent,
    SearchBarComponent,
    RoundedButtonComponent,
    ProfileButtonComponent,
    DrawerButtonComponent,
    DrawerBarComponent,
    LoginButtonComponent,
    DrawerHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
