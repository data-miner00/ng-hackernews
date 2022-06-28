import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements AfterViewInit {
    @ViewChild('container') container: ElementRef<HTMLDivElement>;

    private count: number = 6;
    private index: number = 0;

    constructor() {}

    ngAfterViewInit(): void {
        const imgs =
            this.container.nativeElement.querySelectorAll('.animate-slideshow');
        console.log(imgs);

        setInterval(() => {
            imgs[
                this.index == 0 ? this.count - 1 : this.index - 1
            ].classList.remove('active');

            if (this.index == this.count - 1) this.index = 0;

            imgs[this.index++].classList.add('active');
        }, 7000);
    }
}
