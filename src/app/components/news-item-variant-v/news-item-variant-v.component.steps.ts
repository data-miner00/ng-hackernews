import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import { NewsItemVariantVComponent } from './news-item-variant-v.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

export class NewsItemVariantVSteps extends BaseSteps<
    NewsItemVariantVSteps,
    NewsItemVariantVComponent
> {
    get getClass(): NewsItemVariantVSteps {
        return this;
    }
    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NewsItemVariantVComponent],
        }).compileComponents();
        this.fixture = TestBed.createComponent(NewsItemVariantVComponent);
    }

    givenIHaveRequiredProps(id: number, title: string, description: string) {
        this.component.id = id;
        this.component.title = title;
        this.component.description = description;

        return this;
    }

    givenIHaveMode(mode: string) {
        this.component.mode = mode;
        return this;
    }

    givenIHaveImgProps(src: string, description: string) {
        this.component.imgSrc = src;
        this.component.imgDescription = description;

        return this;
    }
}
