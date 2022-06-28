import { TestBed } from '@angular/core/testing';

import { FakerimgService } from './fakerimg.service';

describe('FakerimgService', () => {
  let service: FakerimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakerimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
