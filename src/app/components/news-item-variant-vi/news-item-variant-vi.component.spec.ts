import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemVariantViComponent } from './news-item-variant-vi.component';

describe('NewsItemVariantViComponent', () => {
  let component: NewsItemVariantViComponent;
  let fixture: ComponentFixture<NewsItemVariantViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemVariantViComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemVariantViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
