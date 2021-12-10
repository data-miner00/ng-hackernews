import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type Base from '../models/hackernews/Item/Base';
import type Story from '../models/hackernews/Item/Story';
import type Updates from '../models/hackernews/Updates';
import type User from '../models/hackernews/User';
import { IHackernewsService } from '../models/IHackernewsService';

@Injectable({
    providedIn: 'root',
})
export class FakernewsService implements IHackernewsService {
    private idList: Array<number> = [
        29484469, 29481665, 29482163, 29484250, 29484998,
    ];

    private updatesData = {
        items: this.idList,
        profiles: [
            'akeck',
            'matheusmoreira',
            'drewcon',
            'm12k',
            'ChrisArchitect',
        ],
    } as Updates;

    private userData = {
        about: 'I&#x27;m an indie game developer.<p>My previous games include DropZap and DropZap 2 for iOS.<p>I&#x27;m currently working on DropZap World:\nhttps:&#x2F;&#x2F;testflight.apple.com&#x2F;join&#x2F;CdEXgjst<p>a.michail@me.com',
        created: 1171931620,
        id: 'amichail',
        karma: 7813,
        submitted: [29484469, 29478771, 29475897, 29472726, 29471893],
    } as User;

    private itemData = {
        by: 'amichail',
        id: 29484469,
        kids: [29485184, 29484813, 29484788, 29485151],
        time: 1638970365,
        title: 'Pfizer and Biontech provide update on Omicron variant',
        type: 'story',
        url: 'https://www.pfizer.com/news/press-release/press-release-detail/pfizer-and-biontech-provide-update-omicron-variant',
        score: 138,
        descendants: 23,
    } as Story;

    public maxitem(): Observable<number> {
        return of(29485252);
    }

    public topstories(): Observable<number[]> {
        return of(this.idList);
    }

    public askstories(): Observable<number[]> {
        return of(this.idList);
    }

    public showstories(): Observable<number[]> {
        return of(this.idList);
    }

    public jobstories(): Observable<number[]> {
        return of(this.idList);
    }

    public updates(): Observable<Updates> {
        return of(this.updatesData);
    }

    public user(_: string): Observable<User> {
        return of(this.userData);
    }

    public item<I extends Base>(_: number): Observable<I> {
        return of(this.itemData as I);
    }
}
