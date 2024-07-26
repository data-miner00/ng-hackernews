import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { NewsItemVariantViComponent } from './news-item-variant-vi.component';

export class NewsItemVariantViSteps extends BaseSteps<
    NewsItemVariantViSteps,
    NewsItemVariantViComponent
> {
    get getClass(): NewsItemVariantViSteps {
        return this;
    }
    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NewsItemVariantViComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(NewsItemVariantViComponent);
    }

    givenIHaveRequiredProps(
        id: number,
        title: string,
        description: string,
        imgSrc: string,
        imgDescription: string
    ) {
        this.component.id = id;
        this.component.title = title;
        this.component.description = description;
        this.component.imgSrc = imgSrc;
        this.component.imgDescription = imgDescription;

        return this;
    }
}
