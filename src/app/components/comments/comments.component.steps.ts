import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BaseSteps } from 'src/app/BaseSteps';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { CommentsComponent } from './comments.component';

export class CommentsSteps extends BaseSteps<CommentsSteps, CommentsComponent> {
    comment: object;

    get getClass(): CommentsSteps {
        return this;
    }

    async whenISetup(): Promise<void> {
        const serviceStub = {
            item: () => of(this.comment),
        };

        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [CommentsComponent, SafeHtmlPipe],
            providers: [{ provide: HackernewsService, useValue: serviceStub }],
        }).compileComponents();

        this.fixture = TestBed.createComponent(CommentsComponent);
        this.component.commentId = 323456;

        this.fixture.debugElement.injector.get<HttpTestingController>(
            HttpTestingController as Type<HttpTestingController>
        );
    }

    givenIHaveTheFollowingComment(comment: object) {
        this.comment = comment;
        return this;
    }

    thenIExpectPostedDateToBe(date: Date) {
        expect(this.component.posted).toEqual(date);
        return this;
    }
}
