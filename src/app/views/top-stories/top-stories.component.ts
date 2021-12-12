import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import type Story from 'src/app/models/hackernews/Item/Story';
import { FakernewsService } from 'src/app/services/fakernews.service';

@Component({
    selector: 'app-top-stories',
    templateUrl: './top-stories.component.html',
    styleUrls: ['./top-stories.component.sass'],
})
export class TopStoriesComponent implements OnInit {
    private STORY_AMOUNT: number = 20;
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
        });
    }
}
