import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemVariantIComponent } from './news-item-variant-i.component';

describe('NewsItemVariantIComponent', () => {
  let component: NewsItemVariantIComponent;
  let fixture: ComponentFixture<NewsItemVariantIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemVariantIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemVariantIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
