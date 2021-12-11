import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskStoriesComponent } from './ask-stories.component';

describe('AskStoriesComponent', () => {
  let component: AskStoriesComponent;
  let fixture: ComponentFixture<AskStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
