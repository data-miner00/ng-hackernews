import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-news-item-variant-i',
    templateUrl: './news-item-variant-i.component.html',
    styleUrls: ['./news-item-variant-i.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsItemVariantIComponent implements OnInit {
    @Input() id: number = 0;
    @Input() title: string =
        'Supreme Court Confirms Leak but Says Text Is Not Final';
    @Input() description: string =
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate porro fugit nostrum autem repellendus ipsa dolorem debitis iusto, quo minima est eum tempore consequuntur repellat. Eius quam at esse deleniti.';

    constructor() {}

    ngOnInit(): void {}
}
