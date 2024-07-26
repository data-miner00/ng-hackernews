import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import Story from 'src/app/models/hackernews/Item/Story';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { JobStoriesComponent } from './job-stories.component';

export class JobStoriesSteps extends BaseSteps<
    JobStoriesSteps,
    JobStoriesComponent
> {
    mockStories: Story[];

    chnService: CachedHackernewsService;

    jobStoriesSpy: jasmine.Spy;

    get getClass(): JobStoriesSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [JobStoriesComponent],
            providers: [CachedHackernewsService],
        }).compileComponents();

        this.fixture = TestBed.createComponent(JobStoriesComponent);

        this.chnService = this.injector.inject(CachedHackernewsService);
    }

    givenHnServiceJobStoriesReturn(mockStories: Story[]): JobStoriesSteps {
        this.jobStoriesSpy = spyOn(
            this.chnService,
            'jobstories'
        ).and.returnValue(of(mockStories));
        return this;
    }

    thenIExpectHnJobStoriesToHaveBeenCalledTimes(
        times: number
    ): JobStoriesSteps {
        expect(this.jobStoriesSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectStoriesArrayToHaveLength(length: number): JobStoriesSteps {
        expect(this.component.stories.length).toBe(length);
        return this;
    }

    thenIExpectStoriesToBe(stories: Story[]): JobStoriesSteps {
        expect(this.component.stories).toEqual(stories);
        return this;
    }
}
