import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    public messageSource = new Subject<undefined>();
    public channel = this.messageSource.asObservable();

    public triggerEvent(): void {
        this.messageSource.next(undefined);
    }
}
