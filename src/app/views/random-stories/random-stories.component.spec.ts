import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomStoriesComponent } from './random-stories.component';

describe('RandomStoriesComponent', () => {
  let component: RandomStoriesComponent;
  let fixture: ComponentFixture<RandomStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
