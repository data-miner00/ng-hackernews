import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import Story from 'src/app/models/hackernews/Item/Story';
import { AskStoriesComponent } from './ask-stories.component';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';

export class AskStoriesSteps extends BaseSteps<
    AskStoriesSteps,
    AskStoriesComponent
> {
    mockStory: Story;

    chnService: CachedHackernewsService;

    askStoriesSpy: jasmine.Spy;

    get getClass(): AskStoriesSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            declarations: [AskStoriesComponent],
            imports: [],
            providers: [
                CachedHackernewsService,
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
            ],
        }).compileComponents();

        this.fixture = TestBed.createComponent(AskStoriesComponent);

        this.chnService = this.injector.inject(CachedHackernewsService);
    }

    givenHnServiceAskStoriesReturns(mockStories: Story[]): AskStoriesSteps {
        this.askStoriesSpy = spyOn(
            this.chnService,
            'askstories'
        ).and.returnValue(of(mockStories));
        return this;
    }

    thenIExpectHnAskStoriesToHaveBeenCalledTimes(
        times: number
    ): AskStoriesSteps {
        expect(this.askStoriesSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectStoriesArrayToHaveLength(length: number): AskStoriesSteps {
        expect(this.component.stories.length).toBe(length);
        return this;
    }

    thenIExpectStoriesToBe(stories: Story[]): AskStoriesSteps {
        expect(this.component.stories).toEqual(stories);
        return this;
    }
}
