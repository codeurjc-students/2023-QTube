import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar.component';
import { ButtonModule } from '../button/button.module';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, ButtonModule, SearchBarModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
