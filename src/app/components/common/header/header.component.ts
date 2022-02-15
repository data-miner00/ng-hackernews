import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
    public constructor(private dataService: DataService) {}

    public toggleSidebar(): void {
        this.dataService.triggerEvent();
    }
}
