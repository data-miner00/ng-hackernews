import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import type Story from 'src/app/models/hackernews/Item/Story';
import { FakernewsService } from 'src/app/services/fakernews.service';
import { HackernewsService } from 'src/app/services/hackernews.service';

import { TopStoriesComponent } from './top-stories.component';

describe('TopStoriesComponent', () => {
  let component: TopStoriesComponent;
  let fixture: ComponentFixture<TopStoriesComponent>;
  let injector: TestBed;
  let hnService: HackernewsService;
  let topStoriesSpy: jasmine.Spy;
  let itemSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TopStoriesComponent],
      providers: [HackernewsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesComponent);
    injector = getTestBed();
    hnService = injector.inject(HackernewsService);
    component = fixture.componentInstance;

    const mockIdArray = [1, 2, 3, 4, 5, 6, 7];

    const item: Story = {
      id: 1,
      type: 'story',
      descendants: 355,
      score: 606,
      title: 'A pffocoal story title',
      url: 'https://www.youtube.com/video/absc.html',
      time: 1639118165,
      kids: [],
      by: 'samira566',
    };

    topStoriesSpy = spyOn(hnService, 'topstories').and.returnValue(
      of(mockIdArray)
    );
    itemSpy = spyOn(hnService, 'item').and.returnValue(of(item));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch stories according to storiesAmount', () => {
    component.storiesAmount = 5;

    expect(topStoriesSpy).not.toHaveBeenCalled();
    expect(itemSpy).not.toHaveBeenCalled();
    expect(component.stories.length).toBe(0);
    expect(component.subscriptionQueue.length).toBe(0);

    fixture.detectChanges();

    expect(topStoriesSpy).toHaveBeenCalled();
    expect(itemSpy).toHaveBeenCalledTimes(5);
    expect(component.stories.length).toBe(5);
    expect(component.subscriptionQueue.length).toBe(5);
  });
});
