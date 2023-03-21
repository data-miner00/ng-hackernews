import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BaseSteps } from 'src/app/BaseSteps';
import Story from 'src/app/models/hackernews/Item/Story';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { JobStoriesComponent } from './job-stories.component';

export class JobStoriesSteps extends BaseSteps<
    JobStoriesSteps,
    JobStoriesComponent
> {
    mockIdArray: number[];
    mockStory: Story;

    hnService: HackernewsService;

    jobStoriesSpy: jasmine.Spy;
    itemSpy: jasmine.Spy;

    get getClass(): JobStoriesSteps {
        return this;
    }

    givenMaxStoriesAmountIs(storiesAmount: number) {
        this.component.storiesAmount = storiesAmount;
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [JobStoriesComponent],
            providers: [HackernewsService],
        }).compileComponents();

        this.fixture = TestBed.createComponent(JobStoriesComponent);

        this.hnService = this.injector.inject(HackernewsService);
    }

    whenISpyOnHnServiceJobStoriesToReturn(mockIdArray: number[]) {
        this.mockIdArray = mockIdArray;
        this.jobStoriesSpy = spyOn(
            this.hnService,
            'jobstories'
        ).and.returnValue(of(mockIdArray));
        return this;
    }

    whenISpyOnHnServiceItemToReturn(mockStory: Story) {
        this.mockStory = mockStory;
        this.itemSpy = spyOn(this.hnService, 'item').and.returnValue(
            of(mockStory)
        );
        return this;
    }

    thenIExpectHnJobStoriesToHaveBeenCalled() {
        expect(this.jobStoriesSpy).toHaveBeenCalled();
        return this;
    }

    thenIExpectHnItemToHaveBeenCalledTimes(times: number) {
        expect(this.itemSpy).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectStoriesArrayToHaveLength(length: number) {
        expect(this.component.stories.length).toBe(length);
        return this;
    }

    thenIExpectSubscriptionQueueToHaveLength(length: number) {
        expect(this.component.subscriptionQueue.length).toBe(length);
        return this;
    }
}
