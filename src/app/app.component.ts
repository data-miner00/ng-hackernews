import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    title = 'ng-hackernews';

    onActivate(event: Event) {
        window.scroll(0, 0);
    }
}
