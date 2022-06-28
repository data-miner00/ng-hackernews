import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FakerimgService {
    constructor() {}

    private placeholderImages: Array<string> = [
        'belhold.webp',
        'derail.jpg',
        'display1.jpg',
        'fader.webp',
        'gates.webp',
        'merlin.webp',
        'display3.webp',
    ];

    public getImg() {
        return this.placeholderImages[
            Math.floor(Math.random() * (this.placeholderImages.length - 1))
        ];
    }
}
