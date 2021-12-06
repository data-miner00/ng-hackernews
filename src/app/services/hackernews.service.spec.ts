import { TestBed } from '@angular/core/testing';

import { HackernewsService } from './hackernews.service';

describe('HackernewsService', () => {
  let service: HackernewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackernewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
