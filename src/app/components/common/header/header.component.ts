import { Component, OnInit } from '@angular/core';

import { type User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
    user?: User;
    now: Date = new Date();

    public constructor(
        private dataService: DataService,
        public auth: AuthService
    ) {}

    async ngOnInit(): Promise<void> {
        this.user = this.auth.currentUser;
    }

    public toggleSidebar(): void {
        this.dataService.triggerEvent();
    }

    public logout(): void {
        this.auth.signOut();
        window.location.replace('/');
    }

    public get timeInDay() {
        const currentHour = this.now.getHours();

        switch (true) {
            case currentHour < 12:
                return 'Morning';
            case currentHour < 16:
                return 'Afternoon';
            case currentHour < 20:
                return 'Evening';
            default:
                return 'Night';
        }
    }
}
