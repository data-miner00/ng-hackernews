import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export abstract class BaseSteps<TSteps, TComponent> {
    fixture: ComponentFixture<TComponent>;

    elUnderTest: DebugElement;
    elsUnderTest: DebugElement[];

    get component(): TComponent {
        return this.fixture.componentInstance;
    }

    get baseEl(): DebugElement {
        return this.fixture.debugElement;
    }

    get compiled(): HTMLElement {
        return this.baseEl.nativeElement;
    }

    /*
     * Getter to retrieve the base class itself.
     */
    abstract get getClass(): TSteps;

    /*
     * The codes that includes the testbed to initialize the test.
     */
    abstract givenISetupAsync(): Promise<void>;

    whenIDetectChanges() {
        this.fixture.detectChanges();
        return this.getClass;
    }

    whenIQuery(selector: string) {
        this.elUnderTest = this.baseEl.query(By.css(selector));
        return this.getClass;
    }

    whenIQueryAll(selector: string) {
        this.elsUnderTest = this.baseEl.queryAll(By.css(selector));
        return this.getClass;
    }

    thenIExpectElementToExist() {
        expect(this.elUnderTest).not.toBeNull();
        return this.getClass;
    }

    thenIExpectElementToNotExist() {
        expect(this.elUnderTest).toBeFalsy();
        return this.getClass;
    }

    thenIExpectElementToHaveTextContent(text: string) {
        expect(this.elUnderTest.nativeElement.textContent).toContain(text);
        return this.getClass;
    }

    thenIExpectElementTextToBeEmpty() {
        expect(this.elUnderTest.nativeElement.textContent).toBeFalsy();
        return this.getClass;
    }

    thenIExpectElementToHaveClass(className: string) {
        expect(this.elUnderTest.nativeElement.classList).toContain(className);
        return this.getClass;
    }

    thenIExpectElementNotToHaveClass(className: string) {
        expect(this.elUnderTest.nativeElement.classList).not.toContain(
            className
        );
        return this.getClass;
    }

    thenIExpectElementToHaveAttribute(attribute: string, value: string) {
        expect(this.elUnderTest.attributes[attribute]).toBe(value);
        return this.getClass;
    }

    thenIExpectQueryToHaveHits(count: number) {
        expect(this.elsUnderTest).toHaveSize(count);
        return this.getClass;
    }

    thenIExpectComponentToBeConstructed() {
        expect(this.component).toBeTruthy();
        return this.getClass;
    }
}
