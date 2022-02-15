import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    Renderer2,
    OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit, OnDestroy {
    @ViewChild('overlay') overlay: ElementRef<HTMLDivElement>;

    private subscription: Subscription;

    public constructor(
        private renderer: Renderer2,
        private dataService: DataService
    ) {}

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public ngOnInit(): void {
        this.subscription = this.dataService.channel.subscribe((_) => {
            this.toggleSidebar();
        });
    }

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
