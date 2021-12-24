import { Component, OnInit, Input } from '@angular/core';

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
    posted: Date;

    constructor() {}

    ngOnInit(): void {
        if (this.time) {
            this.posted = new Date(this.time * 1000);
        }

        if (this.url) {
            try {
                //@ts-ignore
                const [_, domain] = /\/\/(.*?)\//.exec(this.url!);
                this.domain = domain;
            } catch {
                this.domain = this.url!.slice(8);
            }
        } else {
            this.domain = 'unknown.com';
        }
    }
}
