import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TopBarModule } from '../../shared/components/top-bar/top-bar.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { SearchBarModule } from '../../shared/components/search-bar/search-bar.module';
import { LeftBarModule } from '../../shared/components/left-bar/left-bar.module';
import { VideosModule } from '../../shared/components/videos/videos.module';
import { MobileBarModule } from '../../shared/components/mobile-bar/mobile-bar.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { SpinnerModule } from '../../shared/components/spinner/spinner.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TopBarModule,
    ButtonModule,
    SearchBarModule,
    LeftBarModule,
    VideosModule,
    RouterModule,
    MobileBarModule,
    DrawerModule,
    SpinnerModule,
  ],
})
export class HomeModule {}
