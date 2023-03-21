import { TestBed } from '@angular/core/testing';
import { BaseSteps } from 'src/app/BaseSteps';
import { FullWidthAdsComponent } from './full-width-ads.component';

export class FullWidthAdsSteps extends BaseSteps<
    FullWidthAdsSteps,
    FullWidthAdsComponent
> {
    get getClass(): FullWidthAdsSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            declarations: [FullWidthAdsComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(FullWidthAdsComponent);
    }
}
