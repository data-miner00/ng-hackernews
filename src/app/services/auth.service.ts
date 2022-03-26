import { Injectable } from '@angular/core';
import {
    Auth,
    createUserWithEmailAndPassword,
    user,
    User,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
} from '@angular/fire/auth';
import {
    doc,
    DocumentData,
    DocumentReference,
    Firestore,
    setDoc,
} from '@angular/fire/firestore';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user$: Observable<User | null>;

    constructor(private auth: Auth, private firestore: Firestore) {
        this.user$ = user(auth);
    }

    async getUser(): Promise<User | null> {
        return await this.user$.pipe(take(1)).toPromise();
    }

    async emailLogin(email: string, password: string): Promise<UserCredential> {
        return await signInWithEmailAndPassword(this.auth, email, password);
    }

    async emailSignup(email: string, password: string, displayName: string) {
        const userCred: UserCredential = await createUserWithEmailAndPassword(
            this.auth,
            email,
            password
        );
        this.sendEmailVerification();
        this.createProfile(userCred.user, displayName);
    }

    async sendEmailVerification() {
        const currentUser = this.auth.currentUser;
        currentUser && (await sendEmailVerification(currentUser));
    }

    async forgotPassword(passwordResetEmail: string) {
        await sendPasswordResetEmail(this.auth, passwordResetEmail);
    }

    async signOut() {
        await this.auth.signOut();
    }

    async createProfile(user: User, displayName: string) {
        updateProfile(user, {
            displayName,
        });

        const userRef: DocumentReference<DocumentData> = doc(
            this.firestore,
            `users/${user.uid}`
        );
        setDoc(userRef, {
            favourites: [],
            readLater: [],
        });
    }
}
