import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemVariantIvComponent } from './news-item-variant-iv.component';

describe('NewsItemVariantIvComponent', () => {
  let component: NewsItemVariantIvComponent;
  let fixture: ComponentFixture<NewsItemVariantIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemVariantIvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemVariantIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
