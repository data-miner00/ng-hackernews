import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutType } from 'src/app/models/AppLayoutType';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: 'login',
        data: {
            layout: AppLayoutType.Blank,
        },
        component: LoginComponent,
    },
    {
        path: 'signup',
        data: {
            layout: AppLayoutType.Blank,
        },
        component: SignupComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
