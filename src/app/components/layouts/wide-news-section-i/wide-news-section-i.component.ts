import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-wide-news-section-i',
    templateUrl: './wide-news-section-i.component.html',
    styleUrls: ['./wide-news-section-i.component.sass'],
})
export class WideNewsSectionIComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    public range(i: number) {
        return new Array(i);
    }
}
