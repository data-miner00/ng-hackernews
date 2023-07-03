import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-ii',
    templateUrl: './news-item-variant-ii.component.html',
    styleUrls: ['./news-item-variant-ii.component.sass'],
})
export class NewsItemVariantIiComponent implements OnInit {
    // Main props
    @Input() id: number;
    @Input() title: string;
    @Input() avatarUrl?: string;
    @Input() author?: string;
    @Input() imageUrl?: string;
    @Input() description?: string;

    // Style props
    @Input() titleFontSize?: 'text-md' | 'text-lg';
    @Input() titleMarginBottom?: 'mb-md' | 'mb-lg';

    constructor() {}

    ngOnInit(): void {}

    get titleClass(): string {
        if (this.titleFontSize && this.titleMarginBottom)
            return this.titleFontSize + ' ' + this.titleMarginBottom;
        if (this.titleFontSize) return this.titleFontSize;
        if (this.titleMarginBottom) return this.titleMarginBottom;
        return '';
    }
}
