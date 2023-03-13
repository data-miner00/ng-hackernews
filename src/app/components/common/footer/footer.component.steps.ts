import { TestBed } from '@angular/core/testing';
import { BaseSteps } from 'src/app/BaseSteps';
import { FooterComponent } from './footer.component';

export class FooterSteps extends BaseSteps<FooterSteps, FooterComponent> {
    get getClass(): FooterSteps {
        return this;
    }
    async whenISetup(): Promise<void> {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(FooterComponent);
        this.component = this.fixture.componentInstance;
        this.baseEl = this.fixture.debugElement;
    }
}
