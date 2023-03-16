import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BaseSteps } from 'src/app/BaseSteps';
import Story from 'src/app/models/hackernews/Item/Story';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { AskStoriesComponent } from './ask-stories.component';

export class AskStoriesSteps extends BaseSteps<
    AskStoriesSteps,
    AskStoriesComponent
> {
    mockIdArray: number[];
    mockStory: Story;

    hnService: HackernewsService;

    askStoriesSpy: jasmine.Spy;
    itemSpy: jasmine.Spy;

    get getClass(): AskStoriesSteps {
        return this;
    }

    givenMaxStoriesAmountIs(storiesAmount: number) {
        this.component.storiesAmount = storiesAmount;
        return this;
    }

    async whenISetup(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [AskStoriesComponent],
            providers: [HackernewsService],
        }).compileComponents();

        this.fixture = TestBed.createComponent(AskStoriesComponent);

        const injector = getTestBed();
        this.hnService = injector.inject(HackernewsService);
    }

    whenHnServiceAskStoriesReturns(mockIdArray: number[]) {
        this.mockIdArray = mockIdArray;
        this.askStoriesSpy = spyOn(
            this.hnService,
            'askstories'
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

    thenIExpectHnAskStoriesToHaveBeenCalled() {
        expect(this.askStoriesSpy).toHaveBeenCalled();
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
