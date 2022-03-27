import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { User } from '@angular/fire/auth';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
    user: User | null;

    public constructor(
        private dataService: DataService,
        public auth: AuthService
    ) {}

    async ngOnInit(): Promise<void> {
        this.auth.user$.subscribe((user: User | null) => {
            this.user = user;
        });
    }

    public toggleSidebar(): void {
        this.dataService.triggerEvent();
    }
}
