import { TestBed } from '@angular/core/testing';
import { BaseSteps } from 'src/app/BaseSteps';
import { CarouselComponent } from './carousel.component';

export class CarouselSteps extends BaseSteps<CarouselSteps, CarouselComponent> {
    async whenISetup() {
        await TestBed.configureTestingModule({
            declarations: [CarouselComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(CarouselComponent);
    }

    get getClass(): CarouselSteps {
        return this;
    }
}
