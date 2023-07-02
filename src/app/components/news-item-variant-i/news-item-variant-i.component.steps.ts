import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import { NewsItemVariantIComponent } from './news-item-variant-i.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

export class NewsItemVariantISteps extends BaseSteps<
    NewsItemVariantISteps,
    NewsItemVariantIComponent
> {
    get getClass(): NewsItemVariantISteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NewsItemVariantIComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(NewsItemVariantIComponent);
    }

    givenIHaveTheProps(id: number, title: string, description: string) {
        this.component.id = id;
        this.component.title = title;
        this.component.description = description;
        return this;
    }
}
