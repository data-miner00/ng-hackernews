import { Component, OnInit, Input } from '@angular/core';
import type Story from 'src/app/models/hackernews/Item/Story';

@Component({
    selector: 'app-macro-news-layout-ii',
    templateUrl: './macro-news-layout-ii.component.html',
    styleUrls: ['./macro-news-layout-ii.component.sass'],
})
export class MacroNewsLayoutIiComponent implements OnInit {
    @Input() story: Story;
    @Input() story2: Story;
    @Input() story3: Story;
    @Input() story4: Story;
    @Input() story5: Story;

    constructor() {}

    ngOnInit(): void {}

    public range(i: number) {
        return new Array(i);
    }
}
