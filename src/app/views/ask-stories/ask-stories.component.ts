import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IStoriesPage } from 'src/app/models/IStoriesPage';
import type Story from 'src/app/models/hackernews/Item/Story';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';

@Component({
    selector: 'app-ask-stories',
    templateUrl: './ask-stories.component.html',
    styleUrls: ['./ask-stories.component.sass'],
})
export class AskStoriesComponent implements OnInit {
    public stories: Array<Story> = [];

    public constructor(public chnService: CachedHackernewsService) {}

    public ngOnInit(): void {
        this.chnService
            .askstories()
            .subscribe((stories) => (this.stories = stories));
    }
}
