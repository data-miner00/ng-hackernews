import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';

export class CarouselSteps {
    component: CarouselComponent;
    fixture: ComponentFixture<CarouselComponent>;
    baseDebugElement: DebugElement;

    debugElementUnderTest: DebugElement;
    debugElementsUnderTest: DebugElement[];

    async whenISetup() {
        await TestBed.configureTestingModule({
            declarations: [CarouselComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(CarouselComponent);
        this.component = this.fixture.componentInstance;
        this.baseDebugElement = this.fixture.debugElement;
    }

    whenIDetectChanges() {
        this.fixture.detectChanges();
        return this;
    }

    whenIQuery(selector: string) {
        this.debugElementUnderTest = this.baseDebugElement.query(
            By.css(selector)
        );
        return this;
    }

    whenIQueryAll(selector: string) {
        this.debugElementsUnderTest = this.baseDebugElement.queryAll(
            By.css(selector)
        );
        return this;
    }

    thenIExpectElementToExist() {
        expect(this.debugElementUnderTest).not.toBeNull();
        return this;
    }

    thenIExpectElementToHaveTextContent(text: string) {
        expect(this.debugElementUnderTest.nativeElement.textContent).toContain(
            text
        );
        return this;
    }

    thenIExpectQueryToHaveHits(count: number) {
        expect(this.debugElementsUnderTest).toHaveSize(count);
        return this;
    }

    thenIExpectComponentToBeConstructed() {
        expect(this.component).toBeTruthy();
        return this;
    }
}
