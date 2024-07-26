import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

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

        this.userId = (await this.auth.getUser())?.uid ?? '';
    }

    public async onClickAddToWatchLater() {
        if (this.userId === '') return;

        if (!this.addedToReadLater) {
            await this.firestore.addToArrayAsync(
                'users',
                this.userId,
                'readLater',
                this.id
            );
        } else {
            await this.firestore.removeFromArrayAsync(
                'users',
                this.userId,
                'readLater',
                this.id
            );
        }
        this.addedToReadLater = !this.addedToReadLater;
    }
}
