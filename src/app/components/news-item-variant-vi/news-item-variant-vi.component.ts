import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-vi',
    templateUrl: './news-item-variant-vi.component.html',
    styleUrls: ['./news-item-variant-vi.component.sass'],
})
export class NewsItemVariantViComponent implements OnInit {
    @Input() id: number = 0;
    @Input() imgSrc: string =
        'https://static01.nyt.com/images/2022/05/05/podcasts/05stillprocessing-erotic-thrillers/05stillprocessing-erotic-thrillers-square320.jpg?format=pjpg&amp;quality=75&amp;auto=webp&amp;disable=upscale';
    @Input() imgDescription: string =
        'Michael Douglas and Glenn Close star in “Fatal Attraction,” directed by Adrian Lyne.';
    @Input() title: string =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, at.';
    @Input() description: string =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem totam exercitationem, assumenda adipisci vero libero delectus corrupti qui quia!';

    constructor() {}

    ngOnInit(): void {}
}
