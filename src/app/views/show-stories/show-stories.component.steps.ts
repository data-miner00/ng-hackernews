import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BaseSteps } from 'src/app/BaseSteps';
import type Story from 'src/app/models/hackernews/Item/Story';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { ShowStoriesComponent } from './show-stories.component';

export class ShowStoriesSteps extends BaseSteps<
    ShowStoriesSteps,
    ShowStoriesComponent
> {
    mockIdArray: number[];
    mockStory: Story;

    hnService: HackernewsService;

    showStoriesSpy: jasmine.Spy;
    itemSpy: jasmine.Spy;

    get getClass(): ShowStoriesSteps {
        return this;
    }

    givenMaxStoriesAmountIs(storiesAmount: number) {
        this.component.storiesAmount = storiesAmount;
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [ShowStoriesComponent],
            providers: [HackernewsService],
        }).compileComponents();

        this.fixture = TestBed.createComponent(ShowStoriesComponent);

        const injector = getTestBed();
        this.hnService = injector.inject(HackernewsService);
    }

    whenHnServiceShowStoriesReturns(mockIdArray: number[]) {
        this.mockIdArray = mockIdArray;
        this.showStoriesSpy = spyOn(
            this.hnService,
            'showstories'
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

    thenIExpectHnShowStoriesToHaveBeenCalled() {
        expect(this.showStoriesSpy).toHaveBeenCalled();
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
