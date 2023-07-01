import { Component, OnInit, Input } from '@angular/core';
import type Story from 'src/app/models/hackernews/Item/Story';

@Component({
    selector: 'app-wide-columns-section',
    templateUrl: './wide-columns-section.component.html',
    styleUrls: ['./wide-columns-section.component.sass'],
})
export class WideColumnsSectionComponent implements OnInit {
    @Input() story: Story;
    @Input() story2: Story;
    @Input() story3: Story;
    @Input() story4: Story;

    constructor() {}

    ngOnInit(): void {}
}
