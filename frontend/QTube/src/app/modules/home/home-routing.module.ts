import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideosComponent } from 'src/app/shared/components/videos/videos.component';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
