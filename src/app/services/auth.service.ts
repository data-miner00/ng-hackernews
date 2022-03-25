import { Injectable } from '@angular/core';
import { Auth, user, User } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user$: Observable<User | null>;

    constructor(private auth: Auth) {
        this.user$ = user(auth);
    }

    async getUser(): Promise<User | null> {
        return await this.user$.pipe(take(1)).toPromise();
    }

    async emailLogin(email: string, password: string): Promise<any> {
        return await signInWithEmailAndPassword(this.auth, email, password);
    }
}
