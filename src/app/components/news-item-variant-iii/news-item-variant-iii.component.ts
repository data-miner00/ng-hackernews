import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-iii',
    templateUrl: './news-item-variant-iii.component.html',
    styleUrls: ['./news-item-variant-iii.component.sass'],
})
export class NewsItemVariantIiiComponent implements OnInit {
    @Input() avatar: string;

    constructor() {}

    ngOnInit(): void {}
}
