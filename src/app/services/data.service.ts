import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private messageSource = new Subject<undefined>();

    channel = this.messageSource.asObservable();

    constructor() {}

    triggerEvent(): void {
        this.messageSource.next(undefined);
    }
}
