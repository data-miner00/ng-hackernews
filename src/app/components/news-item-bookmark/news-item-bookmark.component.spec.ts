import { DatePipe } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import User from 'src/app/models/hackernews/User';
import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

import { NewsItemBookmarkComponent } from './news-item-bookmark.component';

describe('NewsItemBookmarkComponent', () => {
  let component: NewsItemBookmarkComponent;
  let fixture: ComponentFixture<NewsItemBookmarkComponent>;
  let debugElement: DebugElement;
  let mockFirestoreService: jasmine.SpyObj<FirestoreService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    mockFirestoreService = jasmine.createSpyObj([
      'addToArrayAsync',
      'removeFromArrayAsync',
    ]);

    const user: User = { id: 'user-id', created: 123, karma: 123 };

    mockAuthService = jasmine.createSpyObj(['getUser']);
    mockAuthService.getUser.and.returnValue(Promise.resolve(user as any));

    await TestBed.configureTestingModule({
      declarations: [NewsItemBookmarkComponent, DurationElapsedPipe],
      providers: [
        { provide: FirestoreService, useValue: mockFirestoreService },
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemBookmarkComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.by = 'janeson516';
    component.url = 'https://www.example.com/notes/52888';
    component.descendants = 40;
    component.id = 123456789;
    component.score = 234;
    component.title = 'General rule of thumb for Heincwf';
    component.type = 'story';
    component.time = 1639118165;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render domain, comment counts, upvotes and date correctly', () => {
    const datePipe = new DatePipe('en-US');

    fixture.detectChanges();

    const info = debugElement.query(By.css('.info'))
      .nativeElement as HTMLElement;

    const domain = 'www.example.com';
    const posted = datePipe.transform(component.posted, 'MMMM d, yyyy');

    expect(info.textContent).toBe(
      `${domain} | ${component.descendants} comments | ${component.score} upvotes | ${posted}`
    );
  });

  describe('url-domain rendering', () => {
    const urlTestScenario = [
      {
        condition: 'full url with HTTPS',
        url: 'https://www.youtube.com/watch?id=123456',
        domain: 'www.youtube.com',
      },
      {
        condition: 'full url with HTTP',
        url: 'http://www.youtube.com/watch?id=123456',
        domain: 'www.youtube.com',
      },
      {
        condition: 'domain itself with HTTPS',
        url: 'https://www.youtube.com',
        domain: 'www.youtube.com',
      },
      {
        condition: 'url variation without www',
        url: 'https://angular.io/guide/testing-components-scenarios',
        domain: 'angular.io',
      },
      {
        condition: 'empty url',
        url: '',
        domain: 'unknown.com',
      },
    ];

    urlTestScenario.forEach((scenario) => {
      it(`should render correct domain given ${scenario.condition}`, () => {
        const rightSection: HTMLElement = debugElement.query(
          By.css('.info')
        ).nativeElement;

        expect(component.domain).toBeUndefined();

        component.url = scenario.url;

        fixture.detectChanges();

        expect(component.domain).not.toBeUndefined();
        expect(component.domain).toBe(scenario.domain);
        expect(rightSection.textContent).toContain(scenario.domain);
      });
    });
  });
});
