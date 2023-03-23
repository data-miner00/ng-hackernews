import { TestBed } from '@angular/core/testing';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import { CarouselComponent } from './carousel.component';

export class CarouselSteps extends BaseSteps<CarouselSteps, CarouselComponent> {
    async givenISetupAsync() {
        await TestBed.configureTestingModule({
            declarations: [CarouselComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(CarouselComponent);
    }

    get getClass(): CarouselSteps {
        return this;
    }
}
