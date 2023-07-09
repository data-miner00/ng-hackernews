import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideColumnsSectionComponent } from './wide-columns-section.component';

describe('WideColumnsSectionComponent', () => {
  let component: WideColumnsSectionComponent;
  let fixture: ComponentFixture<WideColumnsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WideColumnsSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WideColumnsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
