import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class DefaultComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    public onActivate(event: Event) {
        window.scroll(0, 0);
    }
}
