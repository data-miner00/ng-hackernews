import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LocalstoreService } from './localstore.service';

import { User } from '../models/User';

export class AuthServiceSteps {
    private isError = false;
    private service: AuthService;
    private mockLocalstoreService: jasmine.SpyObj<LocalstoreService> =
        jasmine.createSpyObj(['getItem', 'setItem', 'removeItem']);

    givenISetup(): AuthServiceSteps {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: LocalstoreService,
                    useValue: this.mockLocalstoreService,
                },
            ],
        });
        this.service = TestBed.inject(AuthService);
        return this;
    }

    givenGetItemReturnsSequentially(
        ...values: (string | null)[]
    ): AuthServiceSteps {
        this.mockLocalstoreService.getItem.and.returnValues(...values);
        return this;
    }

    whenISignup(
        email: string,
        password: string,
        displayName: string
    ): AuthServiceSteps {
        this.service.emailSignup(email, password, displayName);
        return this;
    }

    whenILogin(email: string, password: string): AuthServiceSteps {
        try {
            this.service.emailLogin(email, password);
        } catch {
            this.isError = true;
        }
        return this;
    }

    whenISignOut(): AuthServiceSteps {
        this.service.signOut();
        return this;
    }

    thenIExpectUsersToBe(users: User[]): AuthServiceSteps {
        expect(this.service.allUsers).toEqual(users);
        return this;
    }

    thenIExpectCurrentUserToBe(user: User | undefined): AuthServiceSteps {
        expect(this.service.currentUser).toEqual(user);
        return this;
    }

    thenIExpectServiceInitializedSuccessfully(): AuthServiceSteps {
        expect(this.service).toBeTruthy();
        return this;
    }

    thenIExpectErrorThrown(): AuthServiceSteps {
        expect(this.isError).toBeTrue();
        return this;
    }

    thenIExpectNoErrorThrown(): AuthServiceSteps {
        expect(this.isError).toBeFalse();
        return this;
    }

    thenIExpectSetItemToBeCalled(times: number): AuthServiceSteps {
        expect(this.mockLocalstoreService.setItem).toHaveBeenCalledTimes(times);
        return this;
    }

    thenIExpectRemoveItemToBeCalled(times: number): AuthServiceSteps {
        expect(this.mockLocalstoreService.removeItem).toHaveBeenCalledTimes(
            times
        );
        return this;
    }
}
