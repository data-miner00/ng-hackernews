import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNewsLayoutComponent } from './aside-news-layout.component';

describe('AsideNewsLayoutComponent', () => {
  let component: AsideNewsLayoutComponent;
  let fixture: ComponentFixture<AsideNewsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideNewsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideNewsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
