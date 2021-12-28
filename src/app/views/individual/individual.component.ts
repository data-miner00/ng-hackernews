import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import type Story from 'src/app/models/hackernews/Item/Story';
import { FakernewsService } from 'src/app/services/fakernews.service';

@Component({
    selector: 'app-individual',
    templateUrl: './individual.component.html',
    styleUrls: ['./individual.component.sass'],
})
export class IndividualComponent implements OnInit, OnDestroy {
    story: Story;
    posted: Date;
    routeSubscription: Subscription;
    storySubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private hnService: FakernewsService
    ) {}

    get isNew(): boolean {
        if (!this.posted) return false;

        return (Date.now() - this.posted.getTime()) / (3600 * 24 * 1000) < 2;
    }

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe((params) => {
            this.storySubscription = this.hnService
                .item<Story>(params.id)
                .subscribe((story) => {
                    this.story = story;
                    this.posted = new Date(story.time! * 1000);
                });
        });
    }

    ngOnDestroy(): void {
        if (this.storySubscription) this.storySubscription.unsubscribe();
        if (this.routeSubscription) this.routeSubscription.unsubscribe();
    }
}
