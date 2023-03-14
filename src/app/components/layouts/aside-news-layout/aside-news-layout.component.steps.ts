import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BaseSteps } from 'src/app/BaseSteps';
import { AsideNewsLayoutComponent } from './aside-news-layout.component';

export class AsideNewsLayoutSteps extends BaseSteps<
    AsideNewsLayoutSteps,
    AsideNewsLayoutComponent
> {
    get getClass(): AsideNewsLayoutSteps {
        return this;
    }

    async whenISetup(): Promise<void> {
        await TestBed.configureTestingModule({
            declarations: [AsideNewsLayoutComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
        this.fixture = TestBed.createComponent(AsideNewsLayoutComponent);
    }
}
