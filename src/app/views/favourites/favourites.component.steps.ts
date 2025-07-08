import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FakernewsService } from 'src/app/services/fakernews.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { FavouritesComponent } from './favourites.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export class FavouritesSteps extends BaseSteps<
    FavouritesSteps,
    FavouritesComponent
> {
    private mockFavouriteService: jasmine.SpyObj<FavouriteService>;

    get getClass(): FavouritesSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        this.mockFavouriteService = jasmine.createSpyObj('FavouriteService', [
            'getFavourites',
            'addFavourite',
            'removeFavourite',
        ]);

        await TestBed.configureTestingModule({
    declarations: [FavouritesComponent],
    imports: [],
    providers: [
        {
            provide: HackernewsService,
            useClass: FakernewsService,
        },
        {
            provide: FavouriteService,
            useValue: this.mockFavouriteService,
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
}).compileComponents();

        this.fixture = TestBed.createComponent(FavouritesComponent);
    }
}
