import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-ii',
    templateUrl: './news-item-variant-ii.component.html',
    styleUrls: ['./news-item-variant-ii.component.sass'],
})
export class NewsItemVariantIiComponent implements OnInit {
    @Input() id: number;
    @Input() title: string;
    @Input() avatarUrl: string;
    @Input() author: string;
    @Input() imageUrl: string;
    @Input() description: string;

    constructor() {}

    ngOnInit(): void {}
}
