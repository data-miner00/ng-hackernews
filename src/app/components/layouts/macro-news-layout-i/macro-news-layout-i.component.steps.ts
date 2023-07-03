import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BaseSteps } from 'src/app/test-utils/BaseSteps';
import { FakerimgService } from 'src/app/services/fakerimg.service';
import { MacroNewsLayoutIComponent } from './macro-news-layout-i.component';

export class MacroNewsLayoutISteps extends BaseSteps<
    MacroNewsLayoutISteps,
    MacroNewsLayoutIComponent
> {
    imageFileName: string = '';

    get getClass(): MacroNewsLayoutISteps {
        return this;
    }

    givenIHaveImageFileName(fileName: string) {
        this.imageFileName = fileName;
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        const mockFakerImgService: jasmine.SpyObj<FakerimgService> =
            jasmine.createSpyObj('FakerimgService', ['getImg']);
        mockFakerImgService.getImg.and.returnValue(this.imageFileName);

        await TestBed.configureTestingModule({
            declarations: [MacroNewsLayoutIComponent],
            providers: [
                { provide: FakerimgService, useValue: mockFakerImgService },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        this.fixture = TestBed.createComponent(MacroNewsLayoutIComponent);
    }

    thenIExpectImagePathToBe(imagePath: string) {
        expect(this.component.story5ImgPath).toBe(imagePath);
        return this;
    }
}
