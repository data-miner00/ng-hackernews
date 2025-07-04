import { Injectable } from '@angular/core';

import { LocalstoreService } from './localstore.service';

@Injectable({
    providedIn: 'root',
})
export class FavouriteService {
    private readonly FAVOURITES_KEY = 'favourites';

    constructor(private localStore: LocalstoreService) {}

    public getFavourites(): Array<number> {
        const favourites = this.localStore.getItem(this.FAVOURITES_KEY);
        return favourites ? JSON.parse(favourites) : [];
    }

    public addFavourite(storyId: number): void {
        const favourites = this.getFavourites();
        if (!favourites.includes(storyId)) {
            favourites.push(storyId);
            this.localStore.setItem(
                this.FAVOURITES_KEY,
                JSON.stringify(favourites)
            );
        }
    }

    public removeFavourite(storyId: number): void {
        const favourites = this.getFavourites();
        const index = favourites.indexOf(storyId);
        if (index > -1) {
            favourites.splice(index, 1);
            this.localStore.setItem(
                this.FAVOURITES_KEY,
                JSON.stringify(favourites)
            );
        }
    }
}
