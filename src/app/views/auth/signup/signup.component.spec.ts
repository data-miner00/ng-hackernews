import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        // provideAnalytics(() => getAnalytics()),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
      ],
      providers: [AuthService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
