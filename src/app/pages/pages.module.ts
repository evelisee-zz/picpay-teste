import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { PaymentComponent } from './dialog/payment/payment.component';
import { ConfigCardComponent } from './dialog/config-card/config-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    AppRoutingModule,
    UserListComponent,
    PaymentComponent,
    ConfigCardComponent
  ],
  declarations: [
    UserListComponent,
    PaymentComponent,
    ConfigCardComponent,
  ],
  entryComponents: [PaymentComponent, ConfigCardComponent]
})
export class PagesModule { }
