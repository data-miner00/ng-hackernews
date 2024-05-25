import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import type Story from 'src/app/models/hackernews/Item/Story';
import { ShowStoriesComponent } from './show-stories.component';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export class ShowStoriesSteps extends BaseSteps<
    ShowStoriesSteps,
    ShowStoriesComponent
> {
    mockStory: Story;

    chnService: CachedHackernewsService;

    showStoriesSpy: jasmine.Spy;

    get getClass(): ShowStoriesSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
    declarations: [ShowStoriesComponent],
    imports: [],
    providers: [CachedHackernewsService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();

        this.fixture = TestBed.createComponent(ShowStoriesComponent);

        this.chnService = this.injector.inject(CachedHackernewsService);
    }

    givenHnServiceShowStoriesReturns(mockStories: Story[]): ShowStoriesSteps {
        this.showStoriesSpy = spyOn(
            this.chnService,
            'showstories'
        ).and.returnValue(of(mockStories));
        return this;
    }

    thenIExpectHnShowStoriesToHaveBeenCalledTimes(
        times: number
    ): ShowStoriesSteps {
        expect(this.showStoriesSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectStoriesArrayToHaveLength(length: number): ShowStoriesSteps {
        expect(this.component.stories.length).toBe(length);
        return this;
    }

    thenIExpectStoiesToBe(stories: Story[]): ShowStoriesSteps {
        expect(this.component.stories).toEqual(stories);
        return this;
    }
}
