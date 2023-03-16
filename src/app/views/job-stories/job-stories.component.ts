import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import type Story from 'src/app/models/hackernews/Item/Story';
import { IStoriesPage } from 'src/app/models/IStoriesPage';
import { FakernewsService } from 'src/app/services/fakernews.service';
import { HackernewsService } from 'src/app/services/hackernews.service';

@Component({
    selector: 'app-job-stories',
    templateUrl: './job-stories.component.html',
    styleUrls: ['./job-stories.component.sass'],
})
export class JobStoriesComponent implements IStoriesPage {
    public storiesAmount: number = 20;
    public subscriptionQueue: Array<Subscription> = [];
    public stories: Array<Story> = [];

    public constructor(public hnService: HackernewsService) {}

    public ngOnInit(): void {
        this.hnService.jobstories().subscribe((storiesId: Array<number>) => {
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

    public ngOnDestroy(): void {
        this.subscriptionQueue.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
}
