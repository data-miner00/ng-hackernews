import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export abstract class BaseSteps<TSteps, TComponent> {
    fixture: ComponentFixture<TComponent>;

    elUnderTest: DebugElement;
    elsUnderTest: DebugElement[];

    injector: TestBed = getTestBed();

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
     * Simply return the `this` pointer to the class when implementing.
     */
    abstract get getClass(): TSteps;

    /*
     * The codes that includes the testbed to initialize the test.
     * 1. Setup TestBed
     * 2. Inject `this.fixture`
     * 3. Inject any services to be mocked
     */
    abstract givenISetupAsync(): Promise<void>;

    givenISetupClock(date: Date) {
        jasmine.clock().install();
        jasmine.clock().mockDate(date);
        return this.getClass;
    }

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

    whenIDebug(showComponent = true, showEl = true, showCompiled = true) {
        console.log('------ Debug Logs ------');
        if (showComponent) {
            console.log('component: ', this.component);
            console.log(''.padEnd(30, '-'));
        }
        if (showEl) {
            console.log('baseEl: ', this.baseEl);
            console.log(''.padEnd(30, '-'));
        }
        if (showCompiled) {
            console.log('compiled: ', this.compiled);
            console.log(''.padEnd(30, '-'));
        }

        return this;
    }

    thenIExpectElementToExist() {
        expect(this.elUnderTest).toBeTruthy();
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

    thenIExpectElementTextToBeExactly(text: string) {
        expect(this.elUnderTest.nativeElement.textContent).toBe(text);
        return this.getClass;
    }

    thenIExpectElementToHaveClass(className: string) {
        expect(this.elUnderTest.nativeElement.classList).toContain(className);
        return this.getClass;
    }

    thenIExpectElementToHaveClasses(classes: Array<string>) {
        classes.forEach((className) => {
            this.thenIExpectElementToHaveClass(className);
        });
        return this.getClass;
    }

    thenIExpectElementClassListToBe(classString: string) {
        expect(this.elUnderTest.nativeElement.className).toBe(classString);
        return this.getClass;
    }

    thenIExpectElementNotToHaveClass(className: string) {
        expect(this.elUnderTest.nativeElement.classList).not.toContain(
            className
        );
        return this.getClass;
    }

    thenIExpectElementNotToHaveClasses(classes: Array<string>) {
        classes.forEach((className) => {
            this.thenIExpectElementNotToHaveClass(className);
        });
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
