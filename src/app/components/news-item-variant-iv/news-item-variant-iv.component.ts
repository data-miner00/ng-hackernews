import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-iv',
    templateUrl: './news-item-variant-iv.component.html',
    styleUrls: ['./news-item-variant-iv.component.sass'],
})
export class NewsItemVariantIvComponent implements OnInit {
    @Input() avatarImgSrc: string;
    @Input() contentImgSrc: string;
    @Input() author: string = 'Stephen Grapham';
    @Input() title: string =
        'Overturning Roe Would Discredit the Court and Conservatism';

    constructor() {}

    ngOnInit(): void {}
}
