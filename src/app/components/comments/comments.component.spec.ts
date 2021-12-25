import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CommentsComponent } from './comments.component';
import { Type } from '@angular/core';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { of } from 'rxjs';

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

    httpMock = fixture.debugElement.injector.get<HttpTestingController>(
      HttpTestingController as Type<HttpTestingController>
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
