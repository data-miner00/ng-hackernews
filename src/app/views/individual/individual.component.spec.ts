import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';
import { FakernewsService } from 'src/app/services/fakernews.service';
import type Story from 'src/app/models/hackernews/Item/Story';

import { IndividualComponent } from './individual.component';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

describe('IndividualComponent', () => {
  let component: IndividualComponent;
  let fixture: ComponentFixture<IndividualComponent>;
  let debugElement: DebugElement;
  let hnService: FakernewsService;
  let spy: jasmine.Spy;

  const fakeActivatedRoute = {
    params: of({ id: 123 }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualComponent, DurationElapsedPipe],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        FakernewsService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    hnService = fixture.debugElement.injector.get(FakernewsService);

    spy = spyOn(hnService, 'item').and.returnValue(
      of<Story>({
        id: 123456,
        deleted: false,
        type: 'story',
        by: 'maxxx',
        time: 1639118165,
        dead: false,
        kids: [],
        descendants: 10,
        score: 20,
        title: 'Fizer is so good',
        url: 'https://www.example.com/test/some.html',
      })
    );
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render title correctly', () => {
    fixture.detectChanges();

    const h1: HTMLElement = debugElement.query(
      By.css('.individual h1')
    ).nativeElement;

    expect(h1.textContent).toBe('Fizer is so good');
  });

  it('should render author correctly', () => {
    fixture.detectChanges();

    const div: HTMLElement = debugElement.query(
      By.css('.author')
    ).nativeElement;

    expect(div.textContent).toBe('maxxx');
  });

  it('should render the score properly', () => {
    fixture.detectChanges();

    const div: HTMLElement = debugElement.query(
      By.css('.upvote')
    ).nativeElement;

    expect(div.textContent).toBe('Upvoted 20 times');
  });

  it('should render the date posted corrrectly', () => {
    fixture.detectChanges();

    const div: HTMLElement = debugElement.query(
      By.css('.posted .actual')
    ).nativeElement;
    const durationElapsedPipe = new DurationElapsedPipe();
    const datePipe = new DatePipe('en-US');

    const date = new Date(1639118165 * 1000);

    const formattedDate = datePipe.transform(date, 'd MMMM, yyyy');
    const durationElapsed = durationElapsedPipe.transform(date);

    expect(div.textContent).toContain(`Posted on ${formattedDate}`);
    expect(div.textContent).toContain(`(${durationElapsed})`);
  });

  describe('`NEW` functionality', () => {
    beforeAll(() => {
      jasmine.clock().install();
    });

    afterAll(() => {
      jasmine.clock().uninstall();
    });

    it('should not render `NEW` when item is more than 2 days old', () => {
      const mockDate = new Date(2021, 11, 18);
      jasmine.clock().mockDate(mockDate);
      fixture.detectChanges();
      const query = debugElement.query(By.css('.mark'));

      expect(query).toBeFalsy();
    });

    it('should render `NEW` when item is less than 2 days old', () => {
      const mockDate = new Date(2021, 11, 12);
      jasmine.clock().mockDate(mockDate);
      fixture.detectChanges();
      const query = debugElement.query(By.css('.mark'));

      expect(query).toBeTruthy();
    });
  });
});
