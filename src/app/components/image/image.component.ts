import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.sass'],
})
export class ImageComponent {
    // The source of the image.
    @Input() src: string = '/assets/images/display3.webp';

    // The property that indicates whether the caption will be fixed
    // within the image frame.
    @Input() inset: boolean;

    // The caption that describes the image.
    @Input() description: string =
        'A minuscule caption tries to be inconspicuous';

    // Optional class that will be applied by the caption.
    // Available values: 'left', 'right', 'right-small'
    @Input() captionClass: string;
}
