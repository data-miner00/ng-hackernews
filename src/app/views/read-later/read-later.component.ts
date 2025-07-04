import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { IStoriesPage } from 'src/app/models/IStoriesPage';
import type Story from 'src/app/models/hackernews/Item/Story';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { WatchLaterService } from 'src/app/services/watch-later.service';

@Component({
    selector: 'app-read-later',
    templateUrl: './read-later.component.html',
    styleUrls: ['./read-later.component.sass'],
})
export class ReadLaterComponent implements IStoriesPage {
    public storiesAmount: number = 20;
    public stories: Array<Story> = [];
    public subscriptionQueue: Array<Subscription> = [];

    public constructor(
        public readonly hnService: HackernewsService,
        private readonly watchLater: WatchLaterService
    ) {}

    public ngOnInit(): void {
        const readLater = this.watchLater.getWatchLater();

        readLater.forEach((storyId: number) => {
            const subscriber = this.hnService
                .item<Story>(storyId)
                .subscribe((story: Story) => {
                    this.stories.push(story);
                });
            this.subscriptionQueue.push(subscriber);
        });
    }

    public ngOnDestroy(): void {
        this.subscriptionQueue.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
}
