import { Component, OnInit, Input } from '@angular/core';
import type Story from 'src/app/models/hackernews/Item/Story';

@Component({
    selector: 'app-wide-highlight-section',
    templateUrl: './wide-highlight-section.component.html',
    styleUrls: ['./wide-highlight-section.component.sass'],
})
export class WideHighlightSectionComponent implements OnInit {
    @Input() story: Story;
    @Input() story2: Story;
    @Input() story3: Story;
    @Input() story4: Story;
    @Input() story5: Story;
    @Input() story6: Story;
    @Input() story7: Story;
    @Input() story8: Story;

    constructor() {}

    ngOnInit(): void {}

    public range(i: number) {
        return new Array(i);
    }
}
