import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import { FavouritesComponent } from './favourites.component';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import User from 'src/app/models/hackernews/User';

export class FavouritesSteps extends BaseSteps<
    FavouritesSteps,
    FavouritesComponent
> {
    hnService: HackernewsService;

    get getClass(): FavouritesSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        const user: User = { id: 'user-id', created: 123, karma: 123 };

        const mockAuthService = jasmine.createSpyObj(['getUser']);
        mockAuthService.getUser.and.returnValue(Promise.resolve(user));

        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [FavouritesComponent],
            providers: [
                HackernewsService,
                {
                    provide: FirestoreService,
                    useValue: {},
                },
                { provide: AuthService, useValue: mockAuthService },
            ],
        }).compileComponents();

        this.fixture = TestBed.createComponent(FavouritesComponent);
        this.hnService = this.injector.inject(HackernewsService);
    }
}
