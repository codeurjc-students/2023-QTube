import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { title } from 'src/app/core/constants/constants';

import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { WatchComponent } from 'src/app/modules/watch/pages/watch/watch.component';
import { ErrorComponent } from 'src/app/modules/error/pages/error/error.component';
import { NewComponent } from '../new/pages/new/new.component';
import { UpdateComponent } from '../update/pages/update/update.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
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
    path: 'new',
    component: NewComponent,
  },
  {
    path: 'update/:slug',
    component: UpdateComponent,
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
