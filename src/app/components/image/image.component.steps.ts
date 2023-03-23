import { TestBed } from '@angular/core/testing';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import { ImageComponent } from './image.component';

export class ImageSteps extends BaseSteps<ImageSteps, ImageComponent> {
    get getClass(): ImageSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            declarations: [ImageComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(ImageComponent);
    }

    givenIHaveImageSrc(src: string) {
        this.component.src = src;
        return this;
    }

    givenIHaveInsetValue(inset: boolean) {
        this.component.inset = inset;
        return this;
    }

    givenIHaveDescription(description: string) {
        this.component.description = description;
        return this;
    }

    givenIHaveCaptionClass(captionClass: 'left' | 'right' | 'right-small') {
        this.component.captionClass = captionClass;
        return this;
    }
}
