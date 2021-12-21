import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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

    comment: Comment;
    commentSubscription: Subscription;

    constructor(private hnService: HackernewsService) {}

    ngOnInit(): void {
        this.commentSubscription = this.hnService
            .item<Comment>(this.commentId)
            .subscribe((comment) => {
                this.comment = comment;
            });
    }

    ngOnDestroy(): void {
        if (this.commentSubscription !== null) {
            this.commentSubscription.unsubscribe();
        }
    }
}
