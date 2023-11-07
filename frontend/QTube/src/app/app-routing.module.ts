import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InComponent } from 'src/app/modules/in/pages/in/in.component';
import { OutComponent } from 'src/app/modules/out/pages/out/out.component';

const routes: Routes = [
  {
    path: '',
    component: InComponent,
    loadChildren: () =>
      import('src/app/modules/in/in.module').then((m) => m.InModule),
  },
  {
    path: 'out',
    component: OutComponent,
    loadChildren: () =>
      import('src/app/modules/out/out.module').then((m) => m.OutModule),
  },
  {
    path: '**',
    redirectTo: 'out/error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
