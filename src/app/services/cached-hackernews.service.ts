import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, switchMap, tap } from 'rxjs';

import { HackernewsService } from './hackernews.service';

import type Story from '../models/hackernews/Item/Story';

@Injectable({
    providedIn: 'root',
})
export class CachedHackernewsService {
    private topstoriesList: Story[];
    private askstoriesList: Story[];
    private jobstoriesList: Story[];
    private showstoriesList: Story[];
    private randomstoriesList: Story[];
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

    public randomstories(): Observable<Array<Story>> {
        if (!this.randomstoriesList || this.randomstoriesList.length === 0) {
            return this.rawHnService.maxitem().pipe(
                switchMap((maxId) => {
                    const fetchRandomBatch = (
                        accumulated: Array<Story>
                    ): Observable<Array<Story>> => {
                        const needed = this.maxFetchCount - accumulated.length;
                        if (needed <= 0) {
                            return of(accumulated.slice(0, this.maxFetchCount));
                        }

                        // Fetch more than needed because many HackerNews items are comments, not stories
                        const fetchCount = needed * 5;
                        const randomIds: number[] = [];
                        for (let i = 0; i < fetchCount; i++) {
                            randomIds.push(
                                Math.floor(Math.random() * (maxId - 1)) % maxId
                            );
                        }

                        return forkJoin(
                            randomIds.map((id) =>
                                this.rawHnService.item<Story>(id)
                            )
                        ).pipe(
                            switchMap((items) => {
                                const stories = items.filter(
                                    (x) => x && x.type === 'story'
                                );
                                const newAcc = [...accumulated, ...stories];
                                if (newAcc.length >= this.maxFetchCount) {
                                    return of(
                                        newAcc.slice(0, this.maxFetchCount)
                                    );
                                } else {
                                    return fetchRandomBatch(newAcc);
                                }
                            })
                        );
                    };

                    return fetchRandomBatch([]);
                }),
                tap((x) => (this.randomstoriesList = x))
            );
        } else {
            return of(this.randomstoriesList);
        }
    }
}
