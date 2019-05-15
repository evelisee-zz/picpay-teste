import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/material.module';
import { ButtonComponent } from './button/button.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

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
    CurrencyMaskModule,
    FormsModule
  ],
  exports: [
    HeaderBarComponent,
    ListComponent,
    ButtonComponent,
    InputNumberComponent
  ],
})
export class ComponentsModule { }
