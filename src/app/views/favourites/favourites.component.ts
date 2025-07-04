import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { IStoriesPage } from 'src/app/models/IStoriesPage';
import type Story from 'src/app/models/hackernews/Item/Story';
import { FavouriteService } from 'src/app/services/favourite.service';
import { HackernewsService } from 'src/app/services/hackernews.service';

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.sass'],
})
export class FavouritesComponent implements IStoriesPage {
    public storiesAmount: number = 20;
    public stories: Array<Story> = [];
    public subscriptionQueue: Array<Subscription> = [];

    constructor(
        public readonly hnService: HackernewsService,
        private readonly favouriteService: FavouriteService
    ) {}

    public async ngOnInit(): Promise<void> {
        const favourites = this.favouriteService.getFavourites();

        favourites.forEach((storyId: number) => {
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
