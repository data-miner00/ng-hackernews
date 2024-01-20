import { Component, OnInit } from '@angular/core';
import type Story from 'src/app/models/hackernews/Item/Story';
import { IStoriesPage } from 'src/app/models/IStoriesPage';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';

@Component({
    selector: 'app-show-stories',
    templateUrl: './show-stories.component.html',
    styleUrls: ['./show-stories.component.sass'],
})
export class ShowStoriesComponent implements OnInit {
    public stories: Array<Story> = [];

    public constructor(public chnService: CachedHackernewsService) {}

    public ngOnInit(): void {
        this.chnService
            .showstories()
            .subscribe((stories) => (this.stories = stories));
    }
}
