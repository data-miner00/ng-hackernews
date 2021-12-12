import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import type Story from 'src/app/models/hackernews/Item/Story';
import { IStoriesPage } from 'src/app/models/IStoriesPage';
import { FakernewsService } from 'src/app/services/fakernews.service';

@Component({
    selector: 'app-ask-stories',
    templateUrl: './ask-stories.component.html',
    styleUrls: ['./ask-stories.component.sass'],
})
export class AskStoriesComponent implements IStoriesPage {
    storiesAmount: number = 20;
    stories: Array<Story> = [];
    subscriptionQueue: Array<Subscription> = [];

    constructor(public hnService: FakernewsService) {}

    ngOnInit(): void {
        this.hnService.askstories().subscribe((storiesId: Array<number>) => {
            for (let i = 0; i < this.storiesAmount; i++) {
                const storyId = storiesId[i];
                const subscriber = this.hnService
                    .item<Story>(storyId)
                    .subscribe((story: Story) => {
                        this.stories.push(story);
                    });
                this.subscriptionQueue.push(subscriber);
            }
        });
    }

    ngOnDestroy(): void {
        this.subscriptionQueue.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
}
