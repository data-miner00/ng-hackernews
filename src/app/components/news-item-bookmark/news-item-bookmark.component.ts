import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

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
    public addedToFavourites: boolean;

    private userId: string;

    public constructor(
        public firestore: FirestoreService,
        public auth: AuthService
    ) {}

    public get identiconUrl(): string {
        const strId = String(this.id);
        return `https://github.com/identicons/${strId.slice(0, 4)}.png`;
    }

    public async ngOnInit(): Promise<void> {
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

        this.userId = (await this.auth.getUser())?.uid ?? '';
    }

    public async onClickAddToFavourites() {
        if (this.userId === '') return;

        if (!this.addedToFavourites) {
            await this.firestore.addToArrayAsync(
                'users',
                this.userId,
                'favourites',
                this.id
            );
        } else {
            await this.firestore.removeFromArrayAsync(
                'users',
                this.userId,
                'favourites',
                this.id
            );
        }
        this.addedToFavourites = !this.addedToFavourites;
    }
}
