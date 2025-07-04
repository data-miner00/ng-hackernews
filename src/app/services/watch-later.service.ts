import { Injectable } from '@angular/core';

import { LocalstoreService } from './localstore.service';

@Injectable({
    providedIn: 'root',
})
export class WatchLaterService {
    private readonly WATCH_LATER_KEY = 'readLater';

    constructor(private localStore: LocalstoreService) {}

    public getWatchLater(): Array<number> {
        const watchLater = this.localStore.getItem(this.WATCH_LATER_KEY);
        return watchLater ? JSON.parse(watchLater) : [];
    }

    public addToWatchLater(storyId: number): void {
        const watchLater = this.getWatchLater();
        if (!watchLater.includes(storyId)) {
            watchLater.push(storyId);
            this.localStore.setItem(
                this.WATCH_LATER_KEY,
                JSON.stringify(watchLater)
            );
        }
    }

    public removeFromWatchLater(storyId: number): void {
        const watchLater = this.getWatchLater();
        const index = watchLater.indexOf(storyId);
        if (index > -1) {
            watchLater.splice(index, 1);
            this.localStore.setItem(
                this.WATCH_LATER_KEY,
                JSON.stringify(watchLater)
            );
        }
    }
}
