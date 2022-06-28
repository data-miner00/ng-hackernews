import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.sass'],
})
export class ImageComponent implements OnInit {
    @Input() src: string = '/assets/images/display3.webp';

    @Input() inset: string = 'false';

    // Caption

    @Input() description: string =
        'A minuscule caption tries to be inconspicuous';
    @Input() captionClass: string = '';

    constructor() {}

    ngOnInit(): void {}
}
