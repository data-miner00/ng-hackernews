import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import Story from 'src/app/models/hackernews/Item/Story';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { TopStoriesComponent } from './top-stories.component';

export class TopStoriesSteps extends BaseSteps<
    TopStoriesSteps,
    TopStoriesComponent
> {
    mockIdArray: number[];
    mockStory: Story;

    hnService: HackernewsService;

    topStoriesSpy: jasmine.Spy;
    itemSpy: jasmine.Spy;

    get getClass(): TopStoriesSteps {
        return this;
    }

    givenMaxStoriesAmountIs(storiesAmount: number) {
        this.component.storiesAmount = storiesAmount;
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [TopStoriesComponent],
            providers: [HackernewsService],
        }).compileComponents();

        this.fixture = TestBed.createComponent(TopStoriesComponent);

        this.hnService = this.injector.inject(HackernewsService);
    }

    whenHnServiceTopStoriesReturns(mockIdArray: number[]) {
        this.mockIdArray = mockIdArray;
        this.topStoriesSpy = spyOn(
            this.hnService,
            'topstories'
        ).and.returnValue(of(mockIdArray));
        return this;
    }

    whenHnServiceItemReturn(mockStory: Story) {
        this.mockStory = mockStory;
        this.itemSpy = spyOn(this.hnService, 'item').and.returnValue(
            of(mockStory)
        );
        return this;
    }

    thenIExpectHnTopStoriesToHaveBeenCalled() {
        expect(this.topStoriesSpy).toHaveBeenCalled();
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
