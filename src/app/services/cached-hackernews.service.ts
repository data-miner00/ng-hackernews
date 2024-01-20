import { Injectable } from '@angular/core';
import type Story from '../models/hackernews/Item/Story';
import { Observable, forkJoin, of, switchMap, tap } from 'rxjs';
import { HackernewsService } from './hackernews.service';

@Injectable({
    providedIn: 'root',
})
export class CachedHackernewsService {
    private topstoriesList: Story[];
    private askstoriesList: Story[];
    private jobstoriesList: Story[];
    private showstoriesList: Story[];
    public maxFetchCount: number = 20;

    constructor(private rawHnService: HackernewsService) {}

    public topstories(): Observable<Array<Story>> {
        if (!this.topstoriesList || this.topstoriesList.length === 0) {
            return this.rawHnService.topstories().pipe(
                switchMap((storyIdList) =>
                    forkJoin(
                        storyIdList
                            .slice(
                                0,
                                storyIdList.length < this.maxFetchCount
                                    ? storyIdList.length
                                    : this.maxFetchCount
                            )
                            .map((x) => this.rawHnService.item<Story>(x))
                    )
                ),
                tap((x) => (this.topstoriesList = x))
            );
        } else {
            return of(this.topstoriesList);
        }
    }

    public askstories(): Observable<Array<Story>> {
        if (!this.askstoriesList || this.askstoriesList.length === 0) {
            return this.rawHnService.askstories().pipe(
                switchMap((storyIdList) =>
                    forkJoin(
                        storyIdList
                            .slice(
                                0,
                                storyIdList.length < this.maxFetchCount
                                    ? storyIdList.length
                                    : this.maxFetchCount
                            )
                            .map((x) => this.rawHnService.item<Story>(x))
                    )
                ),
                tap((x) => (this.askstoriesList = x))
            );
        } else {
            return of(this.askstoriesList);
        }
    }

    public jobstories(): Observable<Array<Story>> {
        if (!this.jobstoriesList || this.jobstoriesList.length === 0) {
            return this.rawHnService.jobstories().pipe(
                switchMap((storyIdList) =>
                    forkJoin(
                        storyIdList
                            .slice(
                                0,
                                storyIdList.length < this.maxFetchCount
                                    ? storyIdList.length
                                    : this.maxFetchCount
                            )
                            .map((x) => this.rawHnService.item<Story>(x))
                    )
                ),
                tap((x) => (this.jobstoriesList = x))
            );
        } else {
            return of(this.jobstoriesList);
        }
    }

    public showstories(): Observable<Array<Story>> {
        if (!this.showstoriesList || this.showstoriesList.length === 0) {
            return this.rawHnService.showstories().pipe(
                switchMap((storyIdList) =>
                    forkJoin(
                        storyIdList
                            .slice(
                                0,
                                storyIdList.length < this.maxFetchCount
                                    ? storyIdList.length
                                    : this.maxFetchCount
                            )
                            .map((x) => this.rawHnService.item<Story>(x))
                    )
                ),
                tap((x) => (this.showstoriesList = x))
            );
        } else {
            return of(this.showstoriesList);
        }
    }
}
