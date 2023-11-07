import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { VideosModule } from 'src/app/shared/components/videos/videos.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, VideosModule],
  exports: [HomeComponent],
})
export class HomeModule {}
