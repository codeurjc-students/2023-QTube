import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutComponent } from './pages/out/out.component';
import { OutRoutingModule } from './out-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OutComponent],
  imports: [CommonModule, RouterModule, OutRoutingModule],
  exports: [OutComponent],
})
export class OutModule {}
