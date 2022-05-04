import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemVariantIiComponent } from './news-item-variant-ii.component';

describe('NewsItemVariantIiComponent', () => {
  let component: NewsItemVariantIiComponent;
  let fixture: ComponentFixture<NewsItemVariantIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemVariantIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemVariantIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
