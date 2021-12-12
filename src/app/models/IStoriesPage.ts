import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import type Story from './hackernews/Item/Story';
import { IHackernewsService } from './IHackernewsService';

export interface IStoriesPage extends OnInit, OnDestroy {
    readonly storiesAmount: number;
    readonly subscriptionQueue: Array<Subscription>;
    stories: Array<Story>;
    hnService: IHackernewsService;
}
