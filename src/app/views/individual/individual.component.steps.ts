import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';

import type Story from 'src/app/models/hackernews/Item/Story';
import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';
import { FavouriteService } from 'src/app/services/favourite.service';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { WatchLaterService } from 'src/app/services/watch-later.service';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { IndividualComponent } from './individual.component';

export class IndividualComponentSteps extends BaseSteps<
    IndividualComponentSteps,
    IndividualComponent
> {
    private mockRoute: jasmine.SpyObj<ActivatedRoute>;
    private mockRouter: jasmine.SpyObj<Router>;
    private mockWatchLaterService: jasmine.SpyObj<WatchLaterService>;
    private mockFavouriteService: jasmine.SpyObj<FavouriteService>;
    private mockHackernewsService: jasmine.SpyObj<HackernewsService>;

    get getClass(): IndividualComponentSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        this.mockWatchLaterService = jasmine.createSpyObj([
            'getWatchLater',
            'addToWatchLater',
            'removeFromWatchLater',
        ]);

        this.mockFavouriteService = jasmine.createSpyObj([
            'getFavourites',
            'addFavourite',
            'removeFavourite',
        ]);

        this.mockHackernewsService = jasmine.createSpyObj(['item']);

        await TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([])],
            declarations: [IndividualComponent, DurationElapsedPipe],
            providers: [
                {
                    provide: WatchLaterService,
                    useValue: this.mockWatchLaterService,
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({ id: 123 }),
                    },
                },
                {
                    provide: FavouriteService,
                    useValue: this.mockFavouriteService,
                },
                {
                    provide: HackernewsService,
                    useValue: this.mockHackernewsService,
                },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        this.fixture = TestBed.createComponent(IndividualComponent);
    }

    givenGetWatchLaterReturns(ids: number[]): IndividualComponentSteps {
        this.mockWatchLaterService.getWatchLater.and.returnValue(ids);
        return this;
    }

    givenGetFavouritesReturn(ids: number[]): IndividualComponentSteps {
        this.mockFavouriteService.getFavourites.and.returnValue(ids);
        return this;
    }

    givenHackernewsItemReturns(story: Story): IndividualComponentSteps {
        this.mockHackernewsService.item.and.returnValue(of(story));
        return this;
    }
}
