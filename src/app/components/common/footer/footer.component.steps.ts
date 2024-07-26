import { TestBed } from '@angular/core/testing';

import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { FooterComponent } from './footer.component';

export class FooterSteps extends BaseSteps<FooterSteps, FooterComponent> {
    get getClass(): FooterSteps {
        return this;
    }
    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(FooterComponent);
    }
}
