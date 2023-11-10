import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { title } from 'src/app/core/constants/constants';

import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { WatchComponent } from 'src/app/modules/watch/pages/watch/watch.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: title,
  },
  {
    path: 'watch/:slug',
    component: WatchComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InRoutingModule {}
