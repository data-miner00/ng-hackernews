import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-ii',
    templateUrl: './news-item-variant-ii.component.html',
    styleUrls: ['./news-item-variant-ii.component.sass'],
})
export class NewsItemVariantIiComponent implements OnInit {
    @Input() headline: string =
        'Analysis: The leak of the draft opinion suggests an internal disarray at the Supreme Court, a blow to its legitimacy.';

    constructor() {}

    ngOnInit(): void {}
}
