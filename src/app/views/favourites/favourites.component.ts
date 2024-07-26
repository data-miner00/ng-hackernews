import { Component } from '@angular/core';
import { getDoc } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

import { IStoriesPage } from 'src/app/models/IStoriesPage';
import type Story from 'src/app/models/hackernews/Item/Story';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HackernewsService } from 'src/app/services/hackernews.service';

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.sass'],
})
export class FavouritesComponent implements IStoriesPage {
    public storiesAmount: number = 20;
    public stories: Array<Story> = [];
    public subscriptionQueue: Array<Subscription> = [];
    public uid: string = '';

    constructor(
        public hnService: HackernewsService,
        public firestore: FirestoreService,
        public auth: AuthService
    ) {}

    public async ngOnInit(): Promise<void> {
        this.uid = (await this.auth.getUser())?.uid ?? '';

        if (this.uid === '') return;

        const docRef = await this.firestore.getByIdAsync('users', this.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            userData.favourites.forEach((storyId: number) => {
                const subscriber = this.hnService
                    .item<Story>(storyId)
                    .subscribe((story: Story) => {
                        this.stories.push(story);
                    });
                this.subscriptionQueue.push(subscriber);
            });
        }
    }

    public ngOnDestroy(): void {
        this.subscriptionQueue.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
}
