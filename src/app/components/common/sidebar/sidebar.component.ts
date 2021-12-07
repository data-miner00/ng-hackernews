import {
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
    Renderer2,
} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
    isShowing: boolean = false;

    @ViewChild('overlay') overlay: ElementRef<HTMLDivElement>;

    constructor(private renderer: Renderer2) {}

    ngOnInit(): void {}

    public toggleSidebar(): void {
        if (this.overlay.nativeElement.classList.contains('hidden')) {
            this.overlay.nativeElement.classList.remove('hidden');
        } else {
            this.overlay.nativeElement.classList.add('hidden');
        }
    }

    public stopPropagation(event: Event): void {
        event.stopPropagation();
    }
}
