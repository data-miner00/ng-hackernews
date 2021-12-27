import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';

import { NewsItemComponent } from './news-item.component';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsItemComponent, DurationElapsedPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
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

  it('should render author, score, descendants and title to html', () => {
    fixture.detectChanges();

    const upvotes = debugElement.query(By.css('.upvotes'))
      .nativeElement as HTMLElement;
    const title = debugElement.query(By.css('.right h2'))
      .nativeElement as HTMLElement;
    const author = debugElement.query(By.css('.right p i'))
      .nativeElement as HTMLElement;
    const descendants = debugElement.query(By.css('.right p a'))
      .nativeElement as HTMLElement;

    expect(upvotes.textContent).toBe(component.score!.toString());
    expect(title.textContent).toBe(component.title!);
    expect(author.textContent).toBe(component.by!);
    expect(descendants.textContent).toBe(component.descendants! + ' comments');
  });

  it('should render the time correctly with transformation', () => {
    const durationElapsedPipe = new DurationElapsedPipe();

    expect(component.posted).toBeUndefined();
    fixture.detectChanges();

    const rightSection: HTMLElement = debugElement.query(
      By.css('.right p')
    ).nativeElement;

    expect(component.posted).not.toBeUndefined();
    expect(rightSection.textContent).toContain(
      durationElapsedPipe.transform(component.posted)
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
          By.css('.right p')
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
