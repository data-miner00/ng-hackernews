import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import { NewsItemVariantViiComponent } from './news-item-variant-vii.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

export class NewsItemVariantViiSteps extends BaseSteps<
    NewsItemVariantViiSteps,
    NewsItemVariantViiComponent
> {
    get getClass(): NewsItemVariantViiSteps {
        return this;
    }
    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NewsItemVariantViiComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(NewsItemVariantViiComponent);
    }

    givenIHaveRequiredProps(id: number, title: string) {
        this.component.id = id;
        this.component.title = title;

        return this;
    }
}
