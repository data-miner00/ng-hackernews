import { Component, OnInit, Input } from '@angular/core';
import { elapsed, Time } from 'src/app/utils/date';

@Component({
    selector: 'app-news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.sass'],
})
export class NewsItemComponent implements OnInit {
    @Input() by?: string;
    @Input() descendants?: number;
    @Input() id?: number;
    @Input() score?: number;
    @Input() time?: number;
    @Input() title?: string;
    @Input() type?: string;
    @Input() url?: string;
    domain: string;
    elapsed: number;

    constructor() {}

    ngOnInit(): void {
        //@ts-ignore
        const [_, domain] = /\/\/(.*?)\//.exec(this.url!);
        this.domain = domain || 'unknown.com';

        this.elapsed = elapsed(this.time!, Time.Days);
    }
}
