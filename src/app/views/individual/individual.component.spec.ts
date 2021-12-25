import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';
import { FakernewsService } from 'src/app/services/fakernews.service';
import type Story from 'src/app/models/hackernews/Item/Story';

import { IndividualComponent } from './individual.component';
import { HackernewsService } from 'src/app/services/hackernews.service';

describe('IndividualComponent', () => {
  let component: IndividualComponent;
  let fixture: ComponentFixture<IndividualComponent>;
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
