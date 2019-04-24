import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserInfoModel } from 'src/core/model/userInfo-model';

@Component({
  selector: 'pcp-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserInfoModel 
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

}
