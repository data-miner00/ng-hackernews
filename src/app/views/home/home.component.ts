import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import type Story from 'src/app/models/hackernews/Item/Story';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
    standalone: false,
})
export class HomeComponent implements OnInit, OnDestroy {
    public topStories: Array<Story> = [];
    public askStories: Array<Story> = [];
    public showStories: Array<Story> = [];
    public jobStories: Array<Story> = [];
    private subscriptionQueue: Array<Subscription> = [];

    public constructor(private hnService: CachedHackernewsService) {}

    public ngOnInit(): void {
        this.hnService
            .topstories()
            .subscribe((stories) => (this.topStories = stories));
        this.hnService
            .askstories()
            .subscribe((stories) => (this.askStories = stories));
        this.hnService
            .showstories()
            .subscribe((stories) => (this.showStories = stories));
        this.hnService
            .jobstories()
            .subscribe((stories) => (this.jobStories = stories));
    }

    public ngOnDestroy(): void {
        this.subscriptionQueue.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
}
