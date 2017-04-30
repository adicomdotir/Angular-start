import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from "app/admin/admin-routing.module";
import { EmailComponent } from "app/admin/email/email.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, EmailComponent]
})
export class AdminModule { }
