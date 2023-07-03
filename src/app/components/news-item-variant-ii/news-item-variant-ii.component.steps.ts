import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import { NewsItemVariantIiComponent } from './news-item-variant-ii.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

export class NewsItemVariantIiComponentSteps extends BaseSteps<
    NewsItemVariantIiComponentSteps,
    NewsItemVariantIiComponent
> {
    get getClass(): NewsItemVariantIiComponentSteps {
        return this;
    }
    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NewsItemVariantIiComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(NewsItemVariantIiComponent);
    }

    givenIHaveRequiredProps(id: number, title: string) {
        this.component.id = id;
        this.component.title = title;

        return this;
    }

    givenIHaveAvatarUrl(avatarUrl: string | undefined) {
        this.component.avatarUrl = avatarUrl;

        return this;
    }

    givenIHaveAuthor(author: string | undefined) {
        this.component.author = author;
        return this;
    }

    givenIHaveImageUrl(imageUrl: string | undefined) {
        this.component.imageUrl = imageUrl;
        return this;
    }

    givenIHaveDescription(description: string | undefined) {
        this.component.description = description;
        return this;
    }

    givenIHaveTitleFontSize(titleFontSize: 'text-md' | 'text-lg' | undefined) {
        this.component.titleFontSize = titleFontSize;
        return this;
    }

    givenIHaveTitleMarginBottom(
        titleMarginBottom: 'mb-md' | 'mb-lg' | undefined
    ) {
        this.component.titleMarginBottom = titleMarginBottom;
        return this;
    }
}
