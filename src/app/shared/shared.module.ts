import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule
  ],
  exports: [
    ComponentsModule,
  ]
})
export class SharedModule { }
