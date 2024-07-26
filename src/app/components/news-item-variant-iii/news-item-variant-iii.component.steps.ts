import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { NewsItemVariantIiiComponent } from './news-item-variant-iii.component';

export class NewsItemVariantIiiSteps extends BaseSteps<
    NewsItemVariantIiiSteps,
    NewsItemVariantIiiComponent
> {
    get getClass(): NewsItemVariantIiiSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NewsItemVariantIiiComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(NewsItemVariantIiiComponent);
    }

    givenIHaveRequiredProps(id: number, title: string, description: string) {
        this.component.id = id;
        this.component.title = title;
        this.component.description = description;
        this.component.avatar = '';

        return this;
    }

    givenIHaveAvatarUrl(url: string) {
        this.component.avatar = url;

        return this;
    }
}
