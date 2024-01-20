import { Component, OnInit } from '@angular/core';
import type Story from 'src/app/models/hackernews/Item/Story';
import { IStoriesPage } from 'src/app/models/IStoriesPage';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';

@Component({
    selector: 'app-top-stories',
    templateUrl: './top-stories.component.html',
    styleUrls: ['./top-stories.component.sass'],
})
export class TopStoriesComponent implements OnInit {
    public stories: Array<Story> = [];

    constructor(public chnService: CachedHackernewsService) {}

    public ngOnInit(): void {
        this.chnService
            .topstories()
            .subscribe((stories) => (this.stories = stories));
    }
}
