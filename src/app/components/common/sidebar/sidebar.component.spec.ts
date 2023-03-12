import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render content correctly', () => {
    expect(compiled.textContent).toContain('Top Stories');
    expect(compiled.textContent).toContain('Ask Stories');
    expect(compiled.textContent).toContain('Job Stories');
    expect(compiled.textContent).toContain('API by Y Combinator');
    expect(compiled.textContent).toContain('2021 Shaun Chong');
  });

  it('should be hidden initially', () => {
    expect(compiled.querySelector('.overlay')).toHaveClass('hidden');
  });

  it('should be shown and hidden when toggleSidebar is called accordingly', () => {
    component.toggleSidebar();
    expect(compiled.querySelector('.overlay')).not.toHaveClass('hidden');
    component.toggleSidebar();
    expect(compiled.querySelector('.overlay')).toHaveClass('hidden');
  });

  it('should be hidden when click event is fired on overlay', () => {
    const overlay = compiled.querySelector('.overlay');

    overlay?.classList.remove('hidden');
    expect(overlay).not.toHaveClass('hidden');

    fixture.debugElement
      .query(By.css('.overlay'))
      .triggerEventHandler('click', {});
    expect(overlay).toHaveClass('hidden');
  });

  it('should not close when click inside the sidebar', () => {
    const stopPropagationSpy = spyOn(
      component,
      'stopPropagation'
    ).and.callThrough();
    const overlay = compiled.querySelector('.overlay');
    const sidebar = compiled.querySelector('nav') as HTMLElement;

    overlay?.classList.remove('hidden');
    expect(overlay).not.toHaveClass('hidden');

    sidebar.click();

    expect(stopPropagationSpy).toHaveBeenCalled();
    expect(overlay).not.toHaveClass('hidden');
  });
});
