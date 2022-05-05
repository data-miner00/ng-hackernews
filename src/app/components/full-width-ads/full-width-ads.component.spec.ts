import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthAdsComponent } from './full-width-ads.component';

describe('FullWidthAdsComponent', () => {
  let component: FullWidthAdsComponent;
  let fixture: ComponentFixture<FullWidthAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullWidthAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
