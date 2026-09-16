import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-full-width-ads',
    templateUrl: './full-width-ads.component.html',
    styleUrls: ['./full-width-ads.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class FullWidthAdsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
