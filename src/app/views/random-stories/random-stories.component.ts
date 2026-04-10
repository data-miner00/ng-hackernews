import { Component, OnInit } from '@angular/core';

import type Story from 'src/app/models/hackernews/Item/Story';
import { CachedHackernewsService } from 'src/app/services/cached-hackernews.service';

@Component({
    selector: 'app-random-stories',
    templateUrl: './random-stories.component.html',
    styleUrls: ['./random-stories.component.sass'],
    standalone: false,
})
export class RandomStoriesComponent implements OnInit {
    public stories: Array<Story> = [];

    public constructor(public chnService: CachedHackernewsService) {}

    public ngOnInit(): void {
        this.chnService
            .randomstories()
            .subscribe((stories) => (this.stories = stories));
    }
}
