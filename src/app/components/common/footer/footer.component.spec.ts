import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text for each anchor links', () => {
    const footerHtml: HTMLElement = debugElement.query(
      By.css('footer ul')
    ).nativeElement;

    expect(footerHtml.textContent).toContain('Settings');
    expect(footerHtml.textContent).toContain('About');
    expect(footerHtml.textContent).toContain('FAQs');
    expect(footerHtml.textContent).toContain('Y Combinator');
    expect(footerHtml.textContent).toContain('Repo');
  });
});
