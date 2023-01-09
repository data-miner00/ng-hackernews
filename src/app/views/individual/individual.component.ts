import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import type Story from 'src/app/models/hackernews/Item/Story';
import { FakernewsService } from 'src/app/services/fakernews.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-individual',
    templateUrl: './individual.component.html',
    styleUrls: ['./individual.component.sass'],
})
export class IndividualComponent implements OnInit, OnDestroy {
    public story: Story;
    public posted: Date;
    public routeSubscription: Subscription;
    public storySubscription: Subscription;

    public constructor(
        private route: ActivatedRoute,
        private hnService: FakernewsService,
        private router: Router
    ) {}

    public get isNew(): boolean {
        if (!this.posted) return false;

        return (Date.now() - this.posted.getTime()) / (3600 * 24 * 1000) < 2;
    }

    public get upvoteUrl(): string {
        return `https://news.ycombinator.com/vote?id=${this.story.id}&how=up&goto=item?id=${this.story.id}`;
    }

    public get currentFullUrl(): string {
        return `https://${window.location.host}${this.router.url}`;
    }

    public get facebookShareUrl(): string {
        return `https://www.facebook.com/sharer/sharer.php?u=${this.currentFullUrl}`;
    }

    public get twitterShareUrl(): string {
        return `https://twitter.com/intent/tweet?url=${this.currentFullUrl}&text=${this.story.title}`;
    }

    public get identiconUrl(): string {
        const strId = String(this.story.id);
        return `https://github.com/identicons/${strId.slice(0, 4)}.png`;
    }

    public ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe((params) => {
            this.storySubscription = this.hnService
                .item<Story>(params.id)
                .subscribe((story) => {
                    this.story = story;
                    this.posted = new Date(story.time! * 1000);
                });
        });
    }

    public ngOnDestroy(): void {
        if (this.storySubscription) this.storySubscription.unsubscribe();
        if (this.routeSubscription) this.routeSubscription.unsubscribe();
    }

    public saveAsWatchLater(): void {}

    public getLinkToClipboard(): void {
        if (!navigator.clipboard) {
            const el = document.createElement('input');
            el.value = this.currentFullUrl;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        } else {
            navigator.clipboard.writeText(this.currentFullUrl);
        }
    }
}
