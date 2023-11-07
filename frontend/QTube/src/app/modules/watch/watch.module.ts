import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './pages/watch/watch.component';

@NgModule({
  declarations: [WatchComponent],
  imports: [CommonModule],
  exports: [WatchComponent],
})
export class WatchModule {}
