import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router) {}

    formInput = {
        email: '',
        password: '',
    };

    ngOnInit(): void {}

    async login(): Promise<void> {
        await this.auth.emailLogin(
            this.formInput.email,
            this.formInput.password
        );

        this.router.navigate(['/']);
    }
}
