import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InComponent } from 'src/app/modules/in/pages/in/in.component';

const routes: Routes = [
  {
    path: '',
    component: InComponent,
    loadChildren: () =>
      import('src/app/modules/in/in.module').then((m) => m.InModule),
  },
  {
    path: '**',
    redirectTo: '/error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
