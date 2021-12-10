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
    elapsed: string;

    constructor() {}

    ngOnInit(): void {
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

        switch (true) {
            case elapsed(this.time!, Time.Days) > 0:
                this.elapsed = `${elapsed(this.time!, Time.Days)} days ago`;
                break;
            case elapsed(this.time!, Time.Hours) > 0:
                this.elapsed = `${elapsed(this.time!, Time.Hours)} hours ago`;
                break;
            default:
                this.elapsed = `${elapsed(
                    this.time!,
                    Time.Minutes
                )} minutes ago`;
        }
    }
}
