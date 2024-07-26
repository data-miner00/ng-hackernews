import { TestBed } from '@angular/core/testing';
import {
  FirebaseAppModule,
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';
import { Auth, getAuth, provideAuth } from '@angular/fire/auth';
import {
  Firestore,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

xdescribe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirebaseAppModule],
      providers: [
        { provide: Auth, useValue: {} },
        { provide: Firestore, useValue: {} },
      ],
    }).compileComponents();
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
