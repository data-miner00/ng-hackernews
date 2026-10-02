import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import type { HeadlineClickDetail } from 'src/app/components/news-item-variant-viii/news-item-variant-viii.element';
import type Story from 'src/app/models/hackernews/Item/Story';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class HomeComponent implements OnInit, OnDestroy {
    public topStories: Array<Story> = [];
    public askStories: Array<Story> = [];
    public showStories: Array<Story> = [];
    public jobStories: Array<Story> = [];
    private subscriptionQueue: Array<Subscription> = [];

    public constructor(
        private hnService: CachedHackernewsService,
        private router: Router
    ) {}

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

    public onHeadlineClick(event: Event): void {
        const { id } = (event as CustomEvent<HeadlineClickDetail>).detail;
        this.router.navigate(['/stories', id]);
    }

    public ngOnDestroy(): void {
        this.subscriptionQueue.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
}
