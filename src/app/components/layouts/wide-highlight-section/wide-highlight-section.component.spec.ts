import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideHighlightSectionComponent } from './wide-highlight-section.component';

describe('WideHighlightSectionComponent', () => {
  let component: WideHighlightSectionComponent;
  let fixture: ComponentFixture<WideHighlightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WideHighlightSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WideHighlightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
