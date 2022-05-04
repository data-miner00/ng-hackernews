import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-headline',
    templateUrl: './headline.component.html',
    styleUrls: ['./headline.component.sass'],
})
export class HeadlineComponent implements OnInit {
    @Input() headline: string =
        'Draft Ruling on Abortion Signals Seismic Political Shift';

    constructor() {}

    ngOnInit(): void {}
}
