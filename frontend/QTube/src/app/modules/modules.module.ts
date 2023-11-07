import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorModule } from './error/error.module';
import { InModule } from './in/in.module';
import { HomeModule } from './home/home.module';
import { OutModule } from './out/out.module';
import { WatchModule } from './watch/watch.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ErrorModule, InModule, OutModule, HomeModule, WatchModule],
})
export class ModulesModule {}
