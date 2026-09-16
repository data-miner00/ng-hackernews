import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-paid-post',
    templateUrl: './paid-post.component.html',
    styleUrls: ['./paid-post.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class PaidPostComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
