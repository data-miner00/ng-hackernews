import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appDebug]',
})
export class DebugDirective implements OnInit {
    @Input() color: string = 'red';

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) {
        console.log(this.element.nativeElement);
    }

    ngOnInit(): void {
        this.setElemColor(this.color);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setElemColor('green');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setElemColor(this.color);
    }

    private setElemColor(color: string) {
        this.renderer.setStyle(
            this.element.nativeElement,
            'backgroundColor',
            color
        );
    }
}
