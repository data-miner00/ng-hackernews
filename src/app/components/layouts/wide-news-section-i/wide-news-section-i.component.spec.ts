import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideNewsSectionIComponent } from './wide-news-section-i.component';

describe('WideNewsSectionIComponent', () => {
  let component: WideNewsSectionIComponent;
  let fixture: ComponentFixture<WideNewsSectionIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WideNewsSectionIComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WideNewsSectionIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
