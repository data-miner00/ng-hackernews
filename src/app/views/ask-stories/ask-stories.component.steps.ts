import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import Story from 'src/app/models/hackernews/Item/Story';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { AskStoriesComponent } from './ask-stories.component';

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
            imports: [HttpClientTestingModule],
            declarations: [AskStoriesComponent],
            providers: [CachedHackernewsService],
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
