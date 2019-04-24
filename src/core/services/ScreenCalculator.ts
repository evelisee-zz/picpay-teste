import { ScreenViewService } from './screen';
import { Observable, Subject } from 'rxjs';
import { EventManager } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScreenCalculator extends ScreenViewService {
    
    private resizeSubject: Subject<Window>;

    get onResize$(): Observable<Window> {
        return this.resizeSubject.asObservable();
    }

    constructor(
        private eventManager: EventManager,
        private options: ScreenViewService
    ) {
        super();
        this.resizeSubject = new Subject();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    }

    private onResize(event: UIEvent) {
        this.options.setSize(<Window>event.target);
    }
}
