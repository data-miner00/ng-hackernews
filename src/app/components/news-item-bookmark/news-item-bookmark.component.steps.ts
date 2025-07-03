import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';
import { FavouriteService } from 'src/app/services/favourite.service';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { NewsItemBookmarkComponent } from './news-item-bookmark.component';

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

export class NewsItemBookmarkComponentSteps extends BaseSteps<
    NewsItemBookmarkComponentSteps,
    NewsItemBookmarkComponent
> {
    private mockFavouriteService: jasmine.SpyObj<FavouriteService>;

    get getClass(): NewsItemBookmarkComponentSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        this.mockFavouriteService = jasmine.createSpyObj([
            'getFavourites',
            'addFavourite',
            'removeFavourite',
        ]);

        await TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([])],
            declarations: [NewsItemBookmarkComponent, DurationElapsedPipe],
            providers: [
                {
                    provide: FavouriteService,
                    useValue: this.mockFavouriteService,
                },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        this.fixture = TestBed.createComponent(NewsItemBookmarkComponent);
    }

    givenGetFavouriteReturns(ids: number[]): NewsItemBookmarkComponentSteps {
        this.mockFavouriteService.getFavourites.and.returnValue(ids);
        return this;
    }

    givenThisIsAlreadyAddedToFavourites(): NewsItemBookmarkComponentSteps {
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
    }: NewsDetails): NewsItemBookmarkComponentSteps {
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

    whenISetUrlTo(url: string): NewsItemBookmarkComponentSteps {
        this.component.url = url;
        return this;
    }

    thenIExpectDomainToBeUndefined(): NewsItemBookmarkComponentSteps {
        expect(this.component.domain).toBeUndefined();
        return this;
    }

    thenIExpectDomainToBe(domain: string): NewsItemBookmarkComponentSteps {
        expect(this.component.domain).not.toBeUndefined();
        expect(this.component.domain).toBe(domain);
        return this;
    }

    thenIExpectGetFavouritesToHaveBeenCalled(): NewsItemBookmarkComponentSteps {
        expect(this.mockFavouriteService.getFavourites).toHaveBeenCalled();
        return this;
    }

    thenIExpectAddFavouritesToHaveBeenCalledWith(
        id: number
    ): NewsItemBookmarkComponentSteps {
        expect(this.mockFavouriteService.addFavourite).toHaveBeenCalledWith(id);
        return this;
    }

    thenIExpectRemoveFavouritesToHaveBeenCalledWith(
        id: number
    ): NewsItemBookmarkComponentSteps {
        expect(this.mockFavouriteService.removeFavourite).toHaveBeenCalledWith(
            id
        );
        return this;
    }
}
