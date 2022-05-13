import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroNewsLayoutIiComponent } from './macro-news-layout-ii.component';

describe('MacroNewsLayoutIiComponent', () => {
  let component: MacroNewsLayoutIiComponent;
  let fixture: ComponentFixture<MacroNewsLayoutIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroNewsLayoutIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroNewsLayoutIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
