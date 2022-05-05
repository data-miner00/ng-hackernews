import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-iv',
    templateUrl: './news-item-variant-iv.component.html',
    styleUrls: ['./news-item-variant-iv.component.sass'],
})
export class NewsItemVariantIvComponent implements OnInit {
    @Input() avatar: string;
    @Input() illus: string;

    constructor() {}

    ngOnInit(): void {}
}
