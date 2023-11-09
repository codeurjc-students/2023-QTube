import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from 'src/app/modules/error/pages/error/error.component';
import { NewComponent } from 'src/app/modules/new/new.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    title: '404 Not Found',
  },
  {
    path: 'new',
    component: NewComponent,
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
