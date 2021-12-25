import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';

import { NewsItemComponent } from './news-item.component';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsItemComponent, DurationElapsedPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;

    component.by = 'janeson516';
    component.url = 'https://www.example.com/notes/52888';
    component.descendants = 40;
    component.id = 123456789;
    component.score = 234;
    component.title = 'General rule of thumb for Heincwf';
    component.type = 'story';
    component.time = 1639118165;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
