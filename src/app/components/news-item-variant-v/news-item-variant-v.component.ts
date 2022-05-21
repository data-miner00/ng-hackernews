import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-v',
    templateUrl: './news-item-variant-v.component.html',
    styleUrls: ['./news-item-variant-v.component.sass'],
})
export class NewsItemVariantVComponent implements OnInit {
    @Input() mode: string;
    @Input() src: string;
    @Input() description: string;

    constructor() {}

    ngOnInit(): void {}
}
