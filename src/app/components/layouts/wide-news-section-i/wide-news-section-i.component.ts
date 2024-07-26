import { Component, Input, OnInit } from '@angular/core';

import type Story from 'src/app/models/hackernews/Item/Story';

@Component({
    selector: 'app-wide-news-section-i',
    templateUrl: './wide-news-section-i.component.html',
    styleUrls: ['./wide-news-section-i.component.sass'],
})
export class WideNewsSectionIComponent implements OnInit {
    @Input() story?: Story;
    @Input() story2?: Story;
    @Input() story3?: Story;
    @Input() story4?: Story;
    @Input() story5?: Story;
    @Input() story6?: Story;
    @Input() story7?: Story;
    @Input() story8?: Story;
    @Input() story9?: Story;
    @Input() story10?: Story;
    @Input() story11?: Story;

    constructor() {}

    ngOnInit(): void {}

    public range(i: number) {
        return new Array(i);
    }
}
