import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemVariantViiComponent } from './news-item-variant-vii.component';

describe('NewsItemVariantViiComponent', () => {
  let component: NewsItemVariantViiComponent;
  let fixture: ComponentFixture<NewsItemVariantViiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemVariantViiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemVariantViiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
