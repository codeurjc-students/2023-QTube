import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TopBarModule } from 'src/app/shared/components/top-bar/top-bar.module';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { LeftBarModule } from 'src/app/shared/components/left-bar/left-bar.module';
import { VideosModule } from 'src/app/shared/components/videos/videos.module';
import { MobileBarModule } from 'src/app/shared/components/mobile-bar/mobile-bar.module';
import { DrawerModule } from 'src/app/shared/components/drawer/drawer.module';
import { BrandModule } from 'src/app/shared/components/brand/brand.module';
import { RoundedIconModule } from 'src/app/shared/components/rounded-icon/rounded-icon.module';
import { HorizontalContentModule } from 'src/app/shared/components/horizontal-content/horizontal-content.module';
import { VerticalContentModule } from 'src/app/shared/components/vertical-content/vertical-content.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TopBarModule,
    SearchBarModule,
    LeftBarModule,
    VideosModule,
    RouterModule,
    MobileBarModule,
    DrawerModule,
    BrandModule,
    RoundedIconModule,
    HorizontalContentModule,
    VerticalContentModule,
  ],
})
export class HomeModule {}
