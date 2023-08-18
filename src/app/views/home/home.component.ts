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
    private readonly STORY_AMOUNT: number = 12;
    public topStories: Array<Story> = [];
    public askStories: Array<Story> = [];
    public showStories: Array<Story> = [];
    public jobStories: Array<Story> = [];
    private subscriptionQueue: Array<Subscription> = [];

    public constructor(private hnService: HackernewsService) {}

    public ngOnInit(): void {
        this.hnService
            .topstories()
            .subscribe(this.fetchStories(this.topStories));
        this.hnService
            .askstories()
            .subscribe(this.fetchStories(this.askStories));
        this.hnService
            .showstories()
            .subscribe(this.fetchStories(this.showStories));
        this.hnService
            .jobstories()
            .subscribe(this.fetchStories(this.jobStories));
    }

    public ngOnDestroy(): void {
        this.subscriptionQueue.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }

    private fetchStories(storyQueue: Array<Story>) {
        return (storiesId: Array<number>) => {
            for (let i = 0; i < this.STORY_AMOUNT; i++) {
                const storyId = storiesId[i];
                const subscriber = this.hnService
                    .item<Story>(storyId)
                    .subscribe((story: Story) => {
                        storyQueue.push(story);
                    });
                this.subscriptionQueue.push(subscriber);
            }
        };
    }
}
