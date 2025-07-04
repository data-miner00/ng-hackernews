import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FakernewsService } from 'src/app/services/fakernews.service';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { WatchLaterService } from 'src/app/services/watch-later.service';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { ReadLaterComponent } from './read-later.component';

export class ReadLaterComponentSteps extends BaseSteps<
    ReadLaterComponentSteps,
    ReadLaterComponent
> {
    private mockWatchLaterService: jasmine.SpyObj<WatchLaterService>;

    get getClass(): ReadLaterComponentSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        this.mockWatchLaterService = jasmine.createSpyObj('WatchLaterService', [
            'getWatchLater',
            'addToWatchLater',
            'removeFromWatchLater',
        ]);

        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [ReadLaterComponent],
            providers: [
                {
                    provide: WatchLaterService,
                    useValue: this.mockWatchLaterService,
                },
                { provide: HackernewsService, useClass: FakernewsService },
            ],
        }).compileComponents();

        this.fixture = TestBed.createComponent(ReadLaterComponent);
    }
}
