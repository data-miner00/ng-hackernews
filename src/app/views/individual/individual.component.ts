import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import type Story from 'src/app/models/hackernews/Item/Story';
import { FakernewsService } from 'src/app/services/fakernews.service';
import { elapsed, Time } from 'src/app/utils/date';

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
    elapsed: string;

    constructor(
        private route: ActivatedRoute,
        private hnService: FakernewsService
    ) {}

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
        this.storySubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
}