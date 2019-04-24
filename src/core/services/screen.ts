import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScreenViewService {
  private viewSize: any;

  constructor() { }

  public getSize(): any {
    return this.viewSize;
  }

  public setSize(newSize: any): void {
    this.viewSize = newSize.innerWidth;
  }

  public viewMobileApp(): boolean {
      if(this.viewSize < 600) {
          return true
      } else {
          return false;
      }
  }
}


