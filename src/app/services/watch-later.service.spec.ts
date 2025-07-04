import { TestBed } from '@angular/core/testing';

import { LocalstoreService } from './localstore.service';
import { WatchLaterService } from './watch-later.service';

describe('WatchLaterService', () => {
  let service: WatchLaterService;
  let localStoreSpy: jasmine.SpyObj<LocalstoreService>;

  beforeEach(() => {
    localStoreSpy = jasmine.createSpyObj('LocalstoreService', [
      'getItem',
      'setItem',
    ]);

    TestBed.configureTestingModule({
      providers: [
        WatchLaterService,
        { provide: LocalstoreService, useValue: localStoreSpy },
      ],
    });

    service = TestBed.inject(WatchLaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get watch later items from localStore', () => {
    localStoreSpy.getItem.and.returnValue('[123]');
    const watchLater = service.getWatchLater();
    expect(watchLater).toEqual([123]);
    expect(localStoreSpy.getItem).toHaveBeenCalledWith('readLater');
  });

  it('should add an item to watch later', () => {
    localStoreSpy.getItem.and.returnValue('[123]');
    service.addToWatchLater(456);
    expect(localStoreSpy.setItem).toHaveBeenCalledWith(
      'readLater',
      JSON.stringify([123, 456])
    );
  });

  it('should not add a duplicate item to watch later', () => {
    localStoreSpy.getItem.and.returnValue('[123]');
    service.addToWatchLater(123);
    expect(localStoreSpy.setItem).not.toHaveBeenCalled();
  });

  it('should remove an item from watch later', () => {
    localStoreSpy.getItem.and.returnValue('[123, 456]');
    service.removeFromWatchLater(123);
    expect(localStoreSpy.setItem).toHaveBeenCalledWith(
      'readLater',
      JSON.stringify([456])
    );
  });

  it('should not remove a non-existing item from watch later', () => {
    localStoreSpy.getItem.and.returnValue('[123]');
    service.removeFromWatchLater(456);
    expect(localStoreSpy.setItem).not.toHaveBeenCalled();
  });
});
