import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MatIconModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule,
    CurrencyMaskModule,
    FormsModule
  ],
  exports: [
    ComponentsModule,
  ],
})
export class SharedModule { }
