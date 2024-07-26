import {
    Component,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

import type Comment from 'src/app/models/hackernews/Item/Comment';
import { FakernewsService } from 'src/app/services/fakernews.service';
import { HackernewsService } from 'src/app/services/hackernews.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.sass'],
})
export class CommentsComponent implements OnInit, OnDestroy {
    @Input() commentId: number;
    @ViewChild('subcomments') subcomments: ElementRef<HTMLDivElement>;

    public comment?: Comment;
    public commentSubscription: Subscription;
    public threadCollapsed = false;
    public posted: Date = new Date();

    constructor(private readonly hnService: HackernewsService) {}

    public get collapseButtonText(): string {
        return this.threadCollapsed ? 'Expand' : 'Collapse';
    }

    public ngOnInit(): void {
        this.commentSubscription = this.hnService
            .item<Comment>(this.commentId)
            .subscribe((comment) => {
                this.comment = comment;
                this.posted = new Date(comment.time! * 1000);
            });
    }

    public ngOnDestroy(): void {
        if (this.commentSubscription !== null) {
            this.commentSubscription.unsubscribe();
        }
    }

    public toggleThreadCollapse(): void {
        this.threadCollapsed = !this.threadCollapsed;
        this.subcomments.nativeElement.classList.toggle('collapsed');
    }
}
