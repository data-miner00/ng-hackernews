import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';
import { WatchLaterService } from 'src/app/services/watch-later.service';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { NewsItemComponent } from './news-item.component';

type NewsDetails = {
    by: string;
    url: string;
    descendants: number;
    id: number;
    score: number;
    title: string;
    type: string;
    time: number;
};

export class NewsItemComponentSteps extends BaseSteps<
    NewsItemComponentSteps,
    NewsItemComponent
> {
    private mockWatchLaterService: jasmine.SpyObj<WatchLaterService>;

    get getClass(): NewsItemComponentSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        this.mockWatchLaterService = jasmine.createSpyObj([
            'getWatchLater',
            'addToWatchLater',
            'removeFromWatchLater',
        ]);

        await TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([])],
            declarations: [NewsItemComponent, DurationElapsedPipe],
            providers: [
                {
                    provide: WatchLaterService,
                    useValue: this.mockWatchLaterService,
                },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        this.fixture = TestBed.createComponent(NewsItemComponent);
    }

    givenGetWatchLaterReturns(ids: number[]): NewsItemComponentSteps {
        this.mockWatchLaterService.getWatchLater.and.returnValue(ids);
        return this;
    }

    givenThisIsAlreadyAddedToWatchLaters(): NewsItemComponentSteps {
        this.component.alreadyAdded = true;
        return this;
    }

    givenIHaveNewsDetails({
        by,
        url,
        descendants,
        id,
        score,
        title,
        type,
        time,
    }: NewsDetails): NewsItemComponentSteps {
        this.component.by = by;
        this.component.url = url;
        this.component.descendants = descendants;
        this.component.id = id;
        this.component.score = score;
        this.component.title = title;
        this.component.type = type;
        this.component.time = time;
        return this;
    }

    whenISetUrlTo(url: string): NewsItemComponentSteps {
        this.component.url = url;
        return this;
    }

    thenIExpectDomainToBeUndefined(): NewsItemComponentSteps {
        expect(this.component.domain).toBeUndefined();
        return this;
    }

    thenIExpectDomainToBe(domain: string): NewsItemComponentSteps {
        expect(this.component.domain).not.toBeUndefined();
        expect(this.component.domain).toBe(domain);
        return this;
    }

    thenIExpectGetWatchLaterToHaveBeenCalled(): NewsItemComponentSteps {
        expect(this.mockWatchLaterService.getWatchLater).toHaveBeenCalled();
        return this;
    }

    thenIExpectAddWatchLaterToHaveBeenCalledWith(
        id: number
    ): NewsItemComponentSteps {
        expect(this.mockWatchLaterService.addToWatchLater).toHaveBeenCalledWith(
            id
        );
        return this;
    }

    thenIExpectRemoveWatchLaterToHaveBeenCalledWith(
        id: number
    ): NewsItemComponentSteps {
        expect(
            this.mockWatchLaterService.removeFromWatchLater
        ).toHaveBeenCalledWith(id);
        return this;
    }
}
