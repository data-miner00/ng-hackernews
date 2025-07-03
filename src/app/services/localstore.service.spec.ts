import { TestBed } from '@angular/core/testing';

import { LocalstoreService } from './localstore.service';

describe('LocalstoreService', () => {
  let service: LocalstoreService;
  const testKey = 'testKey';
  const testValue = 'testValue';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstoreService);

    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get item from localStorage', () => {
    localStorage.setItem(testKey, testValue);
    const result = service.getItem(testKey);
    expect(result).toBe(testValue);
  });

  it('should return null for non-existing item', () => {
    const result = service.getItem(testKey);
    expect(result).toBeNull();
  });

  it('should set item in localStorage', () => {
    service.setItem(testKey, testValue);
    const result = localStorage.getItem(testKey);
    expect(result).toBe(testValue);
  });

  it('should overwrite existing item in localStorage', () => {
    localStorage.setItem(testKey, 'oldValue');
    service.setItem(testKey, testValue);
    const result = localStorage.getItem(testKey);
    expect(result).toBe(testValue);
  });
});
