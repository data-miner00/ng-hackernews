import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    styleUrls: ['./blank.component.sass'],
    standalone: false
})
export class BlankComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
