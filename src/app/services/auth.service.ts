import { Injectable } from '@angular/core';

import { LocalstoreService } from './localstore.service';

import { type User } from '../models/User';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly USERS_KEY = 'users';
    private readonly CURRENT_USER_KEY = 'current_user';
    private users: User[];
    private user?: User;

    constructor(private readonly localStore: LocalstoreService) {
        const users = this.localStore.getItem(this.USERS_KEY);

        this.users = users ? JSON.parse(users) : [];

        const currentUser = this.localStore.getItem(this.CURRENT_USER_KEY);

        this.user = currentUser ? JSON.parse(currentUser) : undefined;
    }

    get currentUser(): User | undefined {
        return this.user;
    }

    get allUsers(): User[] {
        return this.users;
    }

    emailLogin(email: string, password: string): void {
        const foundUser = this.users.find(
            (x) => x.email == email && x.password == password
        );

        if (!foundUser) {
            throw new Error('Invalid credentials.');
        }

        this.user = foundUser;
        this.localStore.setItem(
            this.CURRENT_USER_KEY,
            JSON.stringify(foundUser)
        );
    }

    emailSignup(email: string, password: string, displayName: string) {
        const user: User = {
            email,
            password,
            displayName,
        };

        this.users.push(user);
        this.localStore.setItem(this.USERS_KEY, JSON.stringify(this.users));
    }

    signOut() {
        this.localStore.removeItem(this.CURRENT_USER_KEY);
    }
}
