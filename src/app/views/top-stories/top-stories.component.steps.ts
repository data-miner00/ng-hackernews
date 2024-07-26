import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import Story from 'src/app/models/hackernews/Item/Story';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { TopStoriesComponent } from './top-stories.component';

export class TopStoriesSteps extends BaseSteps<
    TopStoriesSteps,
    TopStoriesComponent
> {
    mockStory: Story;

    chnService: CachedHackernewsService;

    topStoriesSpy: jasmine.Spy;

    get getClass(): TopStoriesSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [TopStoriesComponent],
            providers: [CachedHackernewsService],
        }).compileComponents();

        this.fixture = TestBed.createComponent(TopStoriesComponent);

        this.chnService = this.injector.inject(CachedHackernewsService);
    }

    givenHnServiceTopStoriesReturns(mockStories: Story[]): TopStoriesSteps {
        this.topStoriesSpy = spyOn(
            this.chnService,
            'topstories'
        ).and.returnValue(of(mockStories));
        return this;
    }

    thenIExpectHnTopStoriesToHaveBeenCalledTimes(
        times: number
    ): TopStoriesSteps {
        expect(this.topStoriesSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectStoriesToBe(stories: Story[]): TopStoriesSteps {
        expect(this.component.stories).toEqual(stories);
        return this;
    }

    thenIExpectStoriesArrayToHaveLength(length: number): TopStoriesSteps {
        expect(this.component.stories.length).toBe(length);
        return this;
    }
}
