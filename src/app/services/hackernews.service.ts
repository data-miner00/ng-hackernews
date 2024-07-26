import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IHackernewsService } from '../models/IHackernewsService';
import type Base from '../models/hackernews/Item/Base';
import type Updates from '../models/hackernews/Updates';
import type User from '../models/hackernews/User';

/**
 * Docs: https://hackernews.api-docs.io/v0/overview/introduction
 */
@Injectable({
    providedIn: 'root',
})
export class HackernewsService implements IHackernewsService {
    private readonly baseUrl: string = 'https://hacker-news.firebaseio.com/v0';

    constructor(private http: HttpClient) {}

    /**
     * The current largest item id is at https://hacker-news.firebaseio.com/v0/maxitem.
     * You can walk backward from here to discover all items.
     * @returns Observable containing
     */
    public maxitem(): Observable<number> {
        return this.http.get<number>(`${this.baseUrl}/maxitem.json`);
    }

    /**
     * Up to 500 top and new stories are at https://hacker-news.firebaseio.com/v0/topstories and https://hacker-news.firebaseio.com/v0/newstories.
     * @returns Observable containing an array of integer
     */
    public topstories(): Observable<Array<number>> {
        return this.http.get<Array<number>>(`${this.baseUrl}/topstories.json`);
    }

    /**
     * Up to 200 of the latest Ask HN Stories!
     * @returns Observable
     */
    public askstories(): Observable<Array<number>> {
        return this.http.get<Array<number>>(`${this.baseUrl}/askstories.json`);
    }

    /**
     * Up to 200 of the latest Show HN Stories!
     * @returns Observable
     */
    public showstories(): Observable<Array<number>> {
        return this.http.get<Array<number>>(`${this.baseUrl}/showstories.json`);
    }

    /**
     * Up to 200 of the latest Job Stories!
     * @returns Observable
     */
    public jobstories(): Observable<Array<number>> {
        return this.http.get<Array<number>>(`${this.baseUrl}/jobstories.json`);
    }

    /**
     * The item and profile changes are at https://hacker-news.firebaseio.com/v0/updates.
     * Example: https://hacker-news.firebaseio.com/v0/updates.json?print=pretty
     * @returns Observable
     */
    public updates(): Observable<Updates> {
        return this.http.get<Updates>(`${this.baseUrl}/updates.json`);
    }

    /**
     * Users are identified by case-sensitive ids, and live under https://hacker-news.firebaseio.com/v0/user/{user-id}.
     * Only users that have public activity (comments or story submissions) on the site are available through the API.
     * @returns Observable
     */
    public user(userid: string): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/user/${userid}.json`);
    }

    /**
     * Stories, comments, jobs, Ask HNs and even polls are just items. They're identified by their ids,
     * which are unique integers, and live under https://hacker-news.firebaseio.com/v0/item/{item-id}
     *
     * Story: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
     * @returns Observable
     */
    public item<I extends Base>(itemid: number): Observable<I> {
        return this.http.get<I>(`${this.baseUrl}/item/${itemid}.json`);
    }
}
