import { TestBed } from '@angular/core/testing';
import { BaseSteps } from 'src/app/BaseSteps';
import { HeadlineComponent } from './headline.component';

export class HeadlineSteps extends BaseSteps<HeadlineSteps, HeadlineComponent> {
    get getClass(): HeadlineSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            declarations: [HeadlineComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(HeadlineComponent);
    }

    givenIHaveTheFollowingHeadline(headline: string) {
        this.component.headline = headline;
        return this;
    }
}
