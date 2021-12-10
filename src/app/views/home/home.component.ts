import { Component, OnInit, OnDestroy } from '@angular/core';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { FakernewsService } from 'src/app/services/fakernews.service';
import type Story from 'src/app/models/hackernews/Item/Story';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, OnDestroy {
    private readonly STORY_AMOUNT: number = 20;
    stories: Array<Story> = [];
    private subscriptionQueue: Array<Subscription> = [];

    constructor(private hnService: FakernewsService) {}

    ngOnInit(): void {
        this.hnService.topstories().subscribe((storiesId: Array<number>) => {
            for (let i = 0; i < this.STORY_AMOUNT; i++) {
                const storyId = storiesId[i];
                const subscriber = this.hnService
                    .item<Story>(storyId)
                    .subscribe((story: Story) => {
                        this.stories.push(story);
                    });
                this.subscriptionQueue.push(subscriber);
            }
            console.log(this.stories);
        });
    }

    ngOnDestroy(): void {
        this.subscriptionQueue.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
}
