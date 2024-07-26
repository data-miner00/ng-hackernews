import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import type User from 'src/app/models/hackernews/User';
import { AuthService } from 'src/app/services/auth.service';
import { FakernewsService } from 'src/app/services/fakernews.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HackernewsService } from 'src/app/services/hackernews.service';

import { ReadLaterComponent } from './read-later.component';

describe('ReadLaterComponent', () => {
  let component: ReadLaterComponent;
  let fixture: ComponentFixture<ReadLaterComponent>;

  const user: User = { id: 'user-id', created: 123, karma: 123 };

  let mockAuthService = jasmine.createSpyObj(['getUser']);
  mockAuthService.getUser.and.returnValue(Promise.resolve(user as any));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ReadLaterComponent],
      providers: [
        { provide: FirestoreService, useValue: {} },
        { provide: HackernewsService, useClass: FakernewsService },
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
