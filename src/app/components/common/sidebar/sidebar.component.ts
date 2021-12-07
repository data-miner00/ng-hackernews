import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
    isShowing: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    public toggleSidebar(): void {
        this.isShowing = !this.isShowing;
    }

    public stopPropagation(event: Event): void {
        event.stopPropagation();
    }
}
