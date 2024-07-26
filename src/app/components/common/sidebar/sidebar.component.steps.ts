import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BaseSteps } from 'src/app/test-utils/BaseSteps';

import { SidebarComponent } from './sidebar.component';

export class SidebarSteps extends BaseSteps<SidebarSteps, SidebarComponent> {
    stopPropagationSpy: jasmine.Spy;

    get overlay(): HTMLElement | null {
        return this.compiled.querySelector('.overlay');
    }

    get sidebar(): HTMLElement | null {
        return this.compiled.querySelector('nav');
    }

    get getClass(): SidebarSteps {
        return this;
    }

    async givenISetupAsync(): Promise<void> {
        await TestBed.configureTestingModule({
            declarations: [SidebarComponent],
        }).compileComponents();

        this.fixture = TestBed.createComponent(SidebarComponent);
    }

    givenOverlayIsNotHidden() {
        this.overlay?.classList.remove('hidden');
        return this;
    }

    givenISpyOnStopPropagation() {
        this.stopPropagationSpy = spyOn(
            this.component,
            'stopPropagation'
        ).and.callThrough();
        return this;
    }

    whenIToggleSidebar() {
        this.component.toggleSidebar();
        return this;
    }

    whenIClickOnOverlay() {
        this.baseEl.query(By.css('.overlay')).triggerEventHandler('click', {});
        return this;
    }

    whenIClickOnSidebar() {
        this.sidebar?.click();
        return this;
    }

    thenIExpectSidebarToBeHidden() {
        expect(this.overlay).toHaveClass('hidden');
        return this;
    }

    thenIExpectSidebarToBeShown() {
        expect(this.overlay).not.toHaveClass('hidden');
        return this;
    }

    thenIExpectStopPropagationToBeCalled(times: number) {
        expect(this.stopPropagationSpy).toHaveBeenCalled();
        return this;
    }
}
