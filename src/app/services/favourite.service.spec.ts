import { TestBed } from '@angular/core/testing';

import { FavouriteService } from './favourite.service';
import { LocalstoreService } from './localstore.service';

describe('FavouriteService', () => {
  let service: FavouriteService;
  let localStoreSpy: jasmine.SpyObj<LocalstoreService>;

  beforeEach(() => {
    localStoreSpy = jasmine.createSpyObj('LocalstoreService', [
      'getItem',
      'setItem',
    ]);

    TestBed.configureTestingModule({
      providers: [
        FavouriteService,
        { provide: LocalstoreService, useValue: localStoreSpy },
      ],
    });

    service = TestBed.inject(FavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get favourites from localStore', () => {
    localStoreSpy.getItem.and.returnValue('["123"]');
    const favs = service.getFavourites();
    expect(favs).toEqual(['123']);
    expect(localStoreSpy.getItem).toHaveBeenCalledWith('favourites');
  });

  it('should add a favourite', () => {
    localStoreSpy.getItem.and.returnValue('["123"]');
    service.addFavourite('456');
    expect(localStoreSpy.setItem).toHaveBeenCalledWith(
      'favourites',
      JSON.stringify(['123', '456'])
    );
  });

  it('should not add a duplicate favourite', () => {
    localStoreSpy.getItem.and.returnValue('["123"]');
    service.addFavourite('123');
    expect(localStoreSpy.setItem).not.toHaveBeenCalled();
  });

  it('should remove a favourite', () => {
    localStoreSpy.getItem.and.returnValue('["123", "456"]');
    service.removeFavourite('123');
    expect(localStoreSpy.setItem).toHaveBeenCalledWith(
      'favourites',
      JSON.stringify(['456'])
    );
  });

  it('should not remove a non-existing favourite', () => {
    localStoreSpy.getItem.and.returnValue('["123"]');
    service.removeFavourite('456');
    expect(localStoreSpy.setItem).not.toHaveBeenCalled();
  });
});
