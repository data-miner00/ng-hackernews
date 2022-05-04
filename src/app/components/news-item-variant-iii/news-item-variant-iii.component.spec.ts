import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemVariantIiiComponent } from './news-item-variant-iii.component';

describe('NewsItemVariantIiiComponent', () => {
  let component: NewsItemVariantIiiComponent;
  let fixture: ComponentFixture<NewsItemVariantIiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemVariantIiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemVariantIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
