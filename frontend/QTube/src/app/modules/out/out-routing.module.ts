import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { title } from 'src/app/core/constants/constants';

import { ErrorComponent } from 'src/app/modules/error/pages/error/error.component';
import { NewComponent } from 'src/app/modules/new/new.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    title: '404 Not Found / ' + title,
  },
  {
    path: 'new',
    component: NewComponent,
    title: 'Upload a video / ' + title,
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutRoutingModule {}
