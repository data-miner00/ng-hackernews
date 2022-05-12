import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroNewsLayoutIComponent } from './macro-news-layout-i.component';

describe('MacroNewsLayoutIComponent', () => {
  let component: MacroNewsLayoutIComponent;
  let fixture: ComponentFixture<MacroNewsLayoutIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroNewsLayoutIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroNewsLayoutIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
