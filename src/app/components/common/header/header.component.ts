import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
    constructor(private dataService: DataService) {}

    ngOnInit(): void {}

    toggleSidebar(): void {
        this.dataService.triggerEvent();
    }
}
