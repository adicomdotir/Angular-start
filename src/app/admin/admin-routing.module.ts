import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
    {
      path: 'admin',
      component: AdminComponent,
      children:[
        { path:'', component:EmailComponent },
        { path:'email', component:EmailComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
