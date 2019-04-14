import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    AppRoutingModule,
    UserListComponent
  ],
  declarations: [
    UserListComponent
  ]
})
export class PagesModule { }
