import { Component, OnInit, Input } from '@angular/core';
import { UserInfoModel } from 'src/core/model/userInfo-model';

@Component({
  selector: 'pcp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() user: UserInfoModel[];

  constructor() { }

  ngOnInit() {
  }

}
