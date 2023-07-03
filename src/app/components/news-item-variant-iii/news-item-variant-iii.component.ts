import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-item-variant-iii',
    templateUrl: './news-item-variant-iii.component.html',
    styleUrls: ['./news-item-variant-iii.component.sass'],
})
export class NewsItemVariantIiiComponent implements OnInit {
    @Input() id: number;
    @Input() avatar: string =
        'https://this-person-does-not-exist.com/img/avatar-11222e89096f85d99ec4375fbf3fa15f.jpg';
    @Input() title: string = 'Lisp in Space';
    @Input() description: string =
        'Fstesf, author of Lisp in Space, have sparkled a thread over 1311 comments and 290 upvotes as of now.';

    constructor() {}

    ngOnInit(): void {}
}
