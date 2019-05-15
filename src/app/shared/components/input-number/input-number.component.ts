import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'pcp-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  @Input('p-value') _value = '';
  @Output('p-change') changeValue: EventEmitter<any> = new EventEmitter<any>();

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit() {
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  changeInput(val) {
    this.value = val;
    this.changeValue.emit(val);
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

}
