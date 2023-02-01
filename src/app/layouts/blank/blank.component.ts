import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    styleUrls: ['./blank.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlankComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
