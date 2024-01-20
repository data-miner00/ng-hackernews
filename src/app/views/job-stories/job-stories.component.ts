import { Component, OnInit } from '@angular/core';
import type Story from 'src/app/models/hackernews/Item/Story';
import { IStoriesPage } from 'src/app/models/IStoriesPage';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';

@Component({
    selector: 'app-job-stories',
    templateUrl: './job-stories.component.html',
    styleUrls: ['./job-stories.component.sass'],
})
export class JobStoriesComponent implements OnInit {
    public stories: Array<Story> = [];

    public constructor(public chnService: CachedHackernewsService) {}

    public ngOnInit(): void {
        this.chnService
            .jobstories()
            .subscribe((stories) => (this.stories = stories));
    }
}
