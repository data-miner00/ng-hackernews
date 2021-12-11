import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskStoriesComponent } from './views/ask-stories/ask-stories.component';
import { HomeComponent } from './views/home/home.component';
import { JobStoriesComponent } from './views/job-stories/job-stories.component';
import { ShowStoriesComponent } from './views/show-stories/show-stories.component';
import { TopStoriesComponent } from './views/top-stories/top-stories.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'top-stories',
        component: TopStoriesComponent,
    },
    {
        path: 'ask-stories',
        component: AskStoriesComponent,
    },
    {
        path: 'show-stories',
        component: ShowStoriesComponent,
    },
    {
        path: 'job-stories',
        component: JobStoriesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
