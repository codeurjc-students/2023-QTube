import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InRoutingModule } from './in-routing.module';
import { InComponent } from './pages/in/in.component';
import { TopBarModule } from 'src/app/shared/components/top-bar/top-bar.module';
import { LeftBarModule } from 'src/app/shared/components/left-bar/left-bar.module';
import { MobileBarModule } from 'src/app/shared/components/mobile-bar/mobile-bar.module';
import { DrawerModule } from 'src/app/shared/components/drawer/drawer.module';

@NgModule({
  declarations: [InComponent],
  imports: [
    CommonModule,
    TopBarModule,
    LeftBarModule,
    RouterModule,
    MobileBarModule,
    DrawerModule,
    InRoutingModule,
  ],
  exports: [InComponent],
})
export class InModule {}
