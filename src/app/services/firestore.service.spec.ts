import { TestBed } from '@angular/core/testing';
import { FirebaseAppModule } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';

import { FirestoreService } from './firestore.service';

describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseAppModule],
      providers: [FirestoreService, { provide: Firestore, useValue: {} }],
    });
    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
