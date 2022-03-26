import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router) {}

    formInput = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    ngOnInit(): void {}

    public async signup() {
        await this.auth.emailSignup(
            this.formInput.email,
            this.formInput.password,
            this.formInput.displayName
        );

        this.router.navigate(['/']);
    }
}
