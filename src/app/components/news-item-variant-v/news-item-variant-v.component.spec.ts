import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemVariantVComponent } from './news-item-variant-v.component';

describe('NewsItemVariantVComponent', () => {
  let component: NewsItemVariantVComponent;
  let fixture: ComponentFixture<NewsItemVariantVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemVariantVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemVariantVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
