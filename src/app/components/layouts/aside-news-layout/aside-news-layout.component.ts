import { Component, Input, OnInit } from '@angular/core';

import type Story from 'src/app/models/hackernews/Item/Story';

@Component({
    selector: 'app-aside-news-layout',
    templateUrl: './aside-news-layout.component.html',
    styleUrls: ['./aside-news-layout.component.sass'],
})
export class AsideNewsLayoutComponent implements OnInit {
    @Input() story?: Story;
    @Input() story2?: Story;
    @Input() story3?: Story;
    @Input() story4?: Story;
    @Input() story5?: Story;
    @Input() story6?: Story;

    constructor() {}

    ngOnInit(): void {}
}
