import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidPostComponent } from './paid-post.component';

describe('PaidPostComponent', () => {
  let component: PaidPostComponent;
  let fixture: ComponentFixture<PaidPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaidPostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
