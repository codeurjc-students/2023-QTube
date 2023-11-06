import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawerComponent } from './drawer.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [DrawerComponent],
  imports: [CommonModule, ButtonModule],
  exports: [DrawerComponent],
})
export class DrawerModule {}
