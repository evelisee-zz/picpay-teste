import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/material.module';
import { ButtonComponent } from './button/button.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    HeaderBarComponent,
    ListComponent,
    ButtonComponent,
    InputNumberComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderBarComponent,
    ListComponent,
    ButtonComponent,
    InputNumberComponent
  ],
})
export class ComponentsModule { }
