import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'app-news-item-variant-vii',
    templateUrl: './news-item-variant-vii.component.html',
    styleUrls: ['./news-item-variant-vii.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsItemVariantViiComponent implements OnInit {
    @Input() id: number;
    @Input() title: string;

    constructor() {}

    ngOnInit(): void {}
}
