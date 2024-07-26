import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { NewsItemVariantIvComponent } from './news-item-variant-iv.component';

export class NewsItemVariantIvSteps extends BaseSteps<
    NewsItemVariantIvSteps,
    NewsItemVariantIvComponent
> {
    get getClass(): NewsItemVariantIvSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NewsItemVariantIvComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(NewsItemVariantIvComponent);
    }

    givenIHaveRequiredProps(id: number, author: string, title: string) {
        this.component.id = id;
        this.component.author = author;
        this.component.title = title;

        return this;
    }

    givenIHaveAvatarUrl(avatarUrl: string) {
        this.component.avatarImgSrc = avatarUrl;

        return this;
    }

    givenIHaveContentImgUrl(imgUrl: string) {
        this.component.contentImgSrc = imgUrl;

        return this;
    }
}
