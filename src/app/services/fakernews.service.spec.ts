import { TestBed } from '@angular/core/testing';

import { FakernewsService } from './fakernews.service';

describe('FakernewsService', () => {
  let service: FakernewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakernewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
