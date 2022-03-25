import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
    constructor() {}

    formInput = {
        email: '',
        password: '',
    };

    ngOnInit(): void {}

    login(): void {
        console.log(this.formInput.password);
        console.log(this.formInput.email);
    }
}
