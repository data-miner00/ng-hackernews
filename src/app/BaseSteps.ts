import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export abstract class BaseSteps<TSteps, TComponent> {
    component: TComponent;
    fixture: ComponentFixture<TComponent>;

    baseEl: DebugElement;

    elUnderTest: DebugElement;
    elsUnderTest: DebugElement[];

    /*
     * Getter to retrieve the base class itself.
     */
    abstract get getClass(): TSteps;

    /*
     * The codes that includes the testbed to initialize the test.
     */
    abstract whenISetup(): Promise<void>;

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

    thenIExpectElementToHaveTextContent(text: string) {
        expect(this.elUnderTest.nativeElement.textContent).toContain(text);
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
