import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-wide-highlight-section',
    templateUrl: './wide-highlight-section.component.html',
    styleUrls: ['./wide-highlight-section.component.sass'],
})
export class WideHighlightSectionComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    public range(i: number) {
        return new Array(i);
    }
}
