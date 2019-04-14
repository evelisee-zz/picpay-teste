import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    HeaderBarComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderBarComponent,
    ListComponent
  ],
})
export class ComponentsModule { }
