import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pcp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
