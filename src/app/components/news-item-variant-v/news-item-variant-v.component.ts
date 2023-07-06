import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-news-item-variant-v',
    templateUrl: './news-item-variant-v.component.html',
    styleUrls: ['./news-item-variant-v.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsItemVariantVComponent implements OnInit {
    @Input() id: number;
    @Input() mode: string;
    @Input() imgSrc: string;
    @Input() imgDescription: string;
    @Input() title: string =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aspernatur!';
    @Input() description: string =
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ducimus quae totam illum sed quasi, doloremque a mollitia. Atque, delectus.';

    constructor() {}

    ngOnInit(): void {}
}
