import { Observable } from 'rxjs';

import type Base from '../models/hackernews/Item/Base';
import type Updates from '../models/hackernews/Updates';
import type User from '../models/hackernews/User';

export interface IHackernewsService {
    /**
     * The current largest item id is at https://hacker-news.firebaseio.com/v0/maxitem.
     * You can walk backward from here to discover all items.
     * @returns Observable containing
     */
    maxitem(): Observable<number>;

    /**
     * Up to 500 top and new stories are at https://hacker-news.firebaseio.com/v0/topstories and https://hacker-news.firebaseio.com/v0/newstories.
     * @returns Observable containing an array of integer
     */
    topstories(): Observable<Array<number>>;

    /**
     * Up to 200 of the latest Ask HN Stories!
     * @returns Observable
     */
    askstories(): Observable<Array<number>>;

    /**
     * Up to 200 of the latest Show HN Stories!
     * @returns Observable
     */
    showstories(): Observable<Array<number>>;

    /**
     * Up to 200 of the latest Job Stories!
     * @returns Observable
     */
    jobstories(): Observable<Array<number>>;

    /**
     * The item and profile changes are at https://hacker-news.firebaseio.com/v0/updates.
     * Example: https://hacker-news.firebaseio.com/v0/updates.json?print=pretty
     * @returns Observable
     */
    updates(): Observable<Updates>;

    /**
     * Users are identified by case-sensitive ids, and live under https://hacker-news.firebaseio.com/v0/user/{user-id}.
     * Only users that have public activity (comments or story submissions) on the site are available through the API.
     * @returns Observable
     */
    user(userid: string): Observable<User>;

    /**
     * Stories, comments, jobs, Ask HNs and even polls are just items. They're identified by their ids,
     * which are unique integers, and live under https://hacker-news.firebaseio.com/v0/item/{item-id}
     *
     * Story: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
     * @returns Observable
     */
    item<I extends Base>(itemid: number): Observable<I>;
}
