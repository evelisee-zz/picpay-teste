import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/core/services/user.service';
import { UserInfoModel } from 'src/core/model/userInfo-model';
import { MatDialog } from '@angular/material';
import { PaymentComponent } from '../dialog/payment/payment.component';
import { ScreenViewService } from 'src/core/services/screen';
import { ScreenCalculator } from 'src/core/services/ScreenCalculator';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userInfo: UserInfoModel[];
  viewSize: number;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private screenViewService: ScreenViewService,
    private screenCalculator: ScreenCalculator
  ) { }


  ngOnInit() {
    this.getUserList();
    this.viewWidth();
  }

  getUserList() {
    this.userService.listUsers().subscribe(resp => {
      this.userInfo = new Array<UserInfoModel>();
      _.forEach(resp, (info, i) => {
        this.userInfo[i] = new UserInfoModel().deserialize(info);
      })
    })
  }

  viewWidth(){
    this.screenViewService.setSize(window);
    this.screenCalculator.onResize$;
  }

  paymentInfo(user){
    const isMobileApp = this.screenViewService.viewMobileApp();

    if(!isMobileApp) {
      this.dialog.open(PaymentComponent, {
        width: '700px',
        data: user
      });
    }

  }


}
