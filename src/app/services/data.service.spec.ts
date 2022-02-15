import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let subjectSpy: jasmine.SpyObj<Subject<undefined>>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
    subjectSpy = jasmine.createSpyObj('Subject', ['next']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send an event when triggerEvent is called', () => {
    service.messageSource = subjectSpy;
    service.triggerEvent();
    expect(subjectSpy.next).toHaveBeenCalledWith(undefined);
  });
});
