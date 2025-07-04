import { Component, Input, OnInit } from '@angular/core';

import { WatchLaterService } from 'src/app/services/watch-later.service';

@Component({
    selector: 'app-news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.sass'],
})
export class NewsItemComponent implements OnInit {
    @Input() by?: string;
    @Input() descendants?: number;
    @Input() id: number;
    @Input() score?: number;
    @Input() time?: number;
    @Input() title?: string;
    @Input() type?: string;
    @Input() url?: string;
    @Input() alreadyAdded?: boolean;

    public domain: string;
    public posted: Date;
    public addedToReadLater: boolean;

    public constructor(private readonly watchLater: WatchLaterService) {}

    public get identiconUrl(): string {
        const strId = String(this.id);
        return `https://github.com/identicons/${strId.slice(0, 4)}.png`;
    }

    public ngOnInit(): void {
        if (this.alreadyAdded) {
            this.addedToReadLater = true;
        }

        if (this.time) {
            this.posted = new Date(this.time * 1000);
        }

        if (this.url) {
            try {
                //@ts-ignore
                const [_, domain] = /\/\/(.*?)\//.exec(this.url);
                this.domain = domain;
            } catch {
                // default to https check. TODO need check for http too
                this.domain = this.url.slice(8);
            }
        } else {
            this.domain = 'unknown.com';
        }
    }

    public onClickAddToWatchLater() {
        if (!this.addedToReadLater) {
            this.watchLater.addToWatchLater(this.id);
        } else {
            this.watchLater.removeFromWatchLater(this.id);
        }
        this.addedToReadLater = !this.addedToReadLater;
    }
}
