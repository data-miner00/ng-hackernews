import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import Story from 'src/app/models/hackernews/Item/Story';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { CachedHackernewsService } from './cached-hackernews.service';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';

export class CachedHackernewsServiceSteps {
    mockStories: Story[];

    hnService: HackernewsService;
    chnService: CachedHackernewsService;

    jobStoriesSpy: jasmine.Spy;
    topStoriesSpy: jasmine.Spy;
    showStoriesSpy: jasmine.Spy;
    askStoriesSpy: jasmine.Spy;
    itemSpy: jasmine.Spy;

    injector: TestBed = getTestBed();

    get getClass(): CachedHackernewsServiceSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [
                HackernewsService,
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
            ],
        }).compileComponents();

        this.hnService = this.injector.inject(HackernewsService);
        this.chnService = this.injector.inject(CachedHackernewsService);
    }

    givenHnServiceTopStoriesReturns(
        mockIdArray: number[]
    ): CachedHackernewsServiceSteps {
        this.topStoriesSpy = spyOn(
            this.hnService,
            'topstories'
        ).and.returnValue(of(mockIdArray));
        return this;
    }

    givenHnServiceAskStoriesReturns(
        mockIdArray: number[]
    ): CachedHackernewsServiceSteps {
        this.askStoriesSpy = spyOn(
            this.hnService,
            'askstories'
        ).and.returnValue(of(mockIdArray));
        return this;
    }

    givenHnServiceShowStoriesReturns(
        mockIdArray: number[]
    ): CachedHackernewsServiceSteps {
        this.showStoriesSpy = spyOn(
            this.hnService,
            'showstories'
        ).and.returnValue(of(mockIdArray));
        return this;
    }

    givenHnServiceJobStoriesReturns(
        mockIdArray: number[]
    ): CachedHackernewsServiceSteps {
        this.jobStoriesSpy = spyOn(
            this.hnService,
            'jobstories'
        ).and.returnValue(of(mockIdArray));
        return this;
    }

    givenHnServiceItemSequentiallyReturns(
        stories: Story[]
    ): CachedHackernewsServiceSteps {
        this.itemSpy = spyOn(this.hnService, 'item').and.returnValues(
            ...stories.map((x) => of(x))
        );
        return this;
    }

    whenICallCachedTopStories(): CachedHackernewsServiceSteps {
        this.chnService.topstories().subscribe((x) => (this.mockStories = x));
        return this;
    }

    whenICallCachedShowStories(): CachedHackernewsServiceSteps {
        this.chnService.showstories().subscribe((x) => (this.mockStories = x));
        return this;
    }

    whenICallCachedAskStories(): CachedHackernewsServiceSteps {
        this.chnService.askstories().subscribe((x) => (this.mockStories = x));
        return this;
    }

    whenICallCachedJobStories(): CachedHackernewsServiceSteps {
        this.chnService.jobstories().subscribe((x) => (this.mockStories = x));
        return this;
    }

    thenIExpectHnServiceTopStoriesCalled(
        times: number
    ): CachedHackernewsServiceSteps {
        expect(this.topStoriesSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectHnServiceAskStoriesCalled(
        times: number
    ): CachedHackernewsServiceSteps {
        expect(this.askStoriesSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectHnServiceShowStoriesCalled(
        times: number
    ): CachedHackernewsServiceSteps {
        expect(this.showStoriesSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectHnServiceJobStoriesCalled(
        times: number
    ): CachedHackernewsServiceSteps {
        expect(this.jobStoriesSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectHnServiceItemCalled(
        times: number
    ): CachedHackernewsServiceSteps {
        expect(this.itemSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectResultToBe(expected: Story[]): CachedHackernewsServiceSteps {
        expect(this.mockStories).toEqual(expected);
        return this;
    }

    thenIExpectServiceInitializedSuccessfully(): CachedHackernewsServiceSteps {
        expect(this.chnService).toBeTruthy();
        return this;
    }
}
