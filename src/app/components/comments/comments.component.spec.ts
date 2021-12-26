import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CommentsComponent } from './comments.component';
import { DebugElement, Type } from '@angular/core';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let httpMock;
  let spy: jasmine.Spy;
  let mockHnService;
  let serviceStub;

  beforeEach(async () => {
    serviceStub = {
      item: () =>
        of({
          id: 323456,
          deleted: false,
          type: 'comment',
          by: 'duskblade',
          time: 1639118165,
          dead: false,
          kids: [],
          text: `<p>Hello world&#39;s</p>`,
          parent: 123456,
        }),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CommentsComponent, SafeHtmlPipe],
      providers: [{ provide: HackernewsService, useValue: serviceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    component.commentId = 323456;

    httpMock = fixture.debugElement.injector.get<HttpTestingController>(
      HttpTestingController as Type<HttpTestingController>
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind story to property after being fetched', () => {
    expect(component.comment.id).toBe(component.commentId);
    expect(component.comment.by).toBe('duskblade');
    expect(component.comment.kids?.length).toBe(0);
    expect(component.comment.type).toBe('comment');
  });

  it('should populate `posted` based on calculations', () => {
    const date = new Date(1639118165 * 1000);

    expect(component.posted).toEqual(date);
  });

  it('should render to html accordingly based on data provided', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const span = debugElement.query(By.css('.comment .author span'));
    const author = debugElement.query(By.css('.comment .author'));
    const comment = debugElement.query(By.css('.comment article'));

    expect(span.nativeElement.textContent).toBe('duskblade');
    expect(author.nativeElement.textContent).toContain('10 Dec, 2021');
    expect(comment.nativeElement.textContent).toContain("Hello world's");
  });

  it('should not render any of the subcomments given there is none', () => {
    const subcomments = fixture.debugElement.query(By.css('.subcomments'));

    expect(subcomments.nativeElement.textContent).toBeFalsy();
  });
});
