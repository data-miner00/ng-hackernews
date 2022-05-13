import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-macro-news-layout-ii',
    templateUrl: './macro-news-layout-ii.component.html',
    styleUrls: ['./macro-news-layout-ii.component.sass'],
})
export class MacroNewsLayoutIiComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    public range(i: number) {
        return new Array(i);
    }
}
