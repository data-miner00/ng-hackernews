import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IHackernewsService } from './IHackernewsService';
import type Story from './hackernews/Item/Story';

export interface IStoriesPage extends OnInit, OnDestroy {
    readonly storiesAmount: number;
    readonly subscriptionQueue: Array<Subscription>;
    stories: Array<Story>;
    hnService: IHackernewsService;
}
