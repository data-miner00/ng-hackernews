import { Component, Input, OnInit } from '@angular/core';

import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
    selector: 'app-news-item-bookmark',
    templateUrl: './news-item-bookmark.component.html',
    styleUrls: ['./news-item-bookmark.component.sass'],
})
export class NewsItemBookmarkComponent implements OnInit {
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
    public addedToFavourites: boolean = false;

    public constructor(private readonly favouriteService: FavouriteService) {}

    public get identiconUrl(): string {
        const strId = String(this.id);
        return `https://github.com/identicons/${strId.slice(0, 4)}.png`;
    }

    public ngOnInit(): void {
        if (this.alreadyAdded) {
            this.addedToFavourites = true;
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

    public onClickAddToFavourites() {
        if (!this.addedToFavourites) {
            this.favouriteService.addFavourite(this.id);
        } else {
            this.favouriteService.removeFavourite(this.id);
        }
        this.addedToFavourites = !this.addedToFavourites;
    }
}
