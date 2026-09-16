import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class FooterComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
