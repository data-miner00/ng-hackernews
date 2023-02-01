import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { AskStoriesComponent } from './views/ask-stories/ask-stories.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { FavouritesComponent } from './views/favourites/favourites.component';
import { HomeComponent } from './views/home/home.component';
import { IndividualComponent } from './views/individual/individual.component';
import { JobStoriesComponent } from './views/job-stories/job-stories.component';
import { ShowStoriesComponent } from './views/show-stories/show-stories.component';
import { TopStoriesComponent } from './views/top-stories/top-stories.component';
import { ReadLaterComponent } from './views/read-later/read-later.component';
import { AppLayoutType } from './models/AppLayoutType';

const routes: Routes = [
    {
        path: '',
        data: {
            layout: AppLayoutType.Default,
        },
        component: HomeComponent,
    },
    {
        path: 'top',
        data: {
            layout: AppLayoutType.Default,
        },
        component: TopStoriesComponent,
    },
    {
        path: 'ask',
        data: {
            layout: AppLayoutType.Default,
        },
        component: AskStoriesComponent,
    },
    {
        path: 'show',
        data: {
            layout: AppLayoutType.Default,
        },
        component: ShowStoriesComponent,
    },
    {
        path: 'job',
        data: {
            layout: AppLayoutType.Default,
        },
        component: JobStoriesComponent,
    },
    {
        path: 'faqs',
        data: {
            layout: AppLayoutType.Default,
        },
        component: FaqsComponent,
    },
    {
        path: 'stories/:id',
        data: {
            layout: AppLayoutType.Default,
        },
        component: IndividualComponent,
    },
    {
        path: 'bookmarks',
        data: {
            layout: AppLayoutType.Default,
        },
        component: FavouritesComponent,
    },
    {
        path: 'login',
        data: {
            layout: AppLayoutType.Blank,
        },
        component: LoginComponent,
    },
    {
        path: 'about',
        data: {
            layout: AppLayoutType.Default,
        },
        component: AboutComponent,
    },
    {
        path: 'signup',
        data: {
            layout: AppLayoutType.Blank,
        },
        component: SignupComponent,
    },
    {
        path: 'read-later',
        data: {
            layout: AppLayoutType.Default,
        },
        component: ReadLaterComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
