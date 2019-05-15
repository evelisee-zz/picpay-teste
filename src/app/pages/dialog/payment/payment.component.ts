import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UserInfoModel } from 'src/core/model/userInfo-model';
import { ConfigCardComponent } from '../config-card/config-card.component';

@Component({
  selector: 'pcp-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  valueNumber = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserInfoModel,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  getValue(value) {
    this.valueNumber = value;
  }

  openCreditCardConfig() {
    this.dialog.open(ConfigCardComponent, {
      width: '700px',
      // data: user
    });
  }

  console() {
    console.log(this.valueNumber)
  }

}
