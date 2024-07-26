import { Component, Input, OnInit } from '@angular/core';

import type Story from 'src/app/models/hackernews/Item/Story';
import { FakerimgService } from 'src/app/services/fakerimg.service';

@Component({
    selector: 'app-macro-news-layout-i',
    templateUrl: './macro-news-layout-i.component.html',
    styleUrls: ['./macro-news-layout-i.component.sass'],
})
export class MacroNewsLayoutIComponent implements OnInit {
    @Input() story?: Story;
    @Input() story2?: Story;
    @Input() story3?: Story;

    constructor(private fakerimgService: FakerimgService) {}

    public headline: string =
        'J.D. Vance Wins Republican Senate Primary in Ohio';

    // Big story
    public story5Title = 'Ohio U.S. Senate Results';
    public story5ImgPath: string;
    public story5ImgCaption =
        'Thousands inundated New York City for gender equality protest';
    public story5Description =
        "Zaitsev's rule predicts the regioselectivity of the olefin (alkene), formed by the elimination reaction of 2o or 3o alkyl halides.";

    ngOnInit(): void {
        this.story5ImgPath = '/assets/images/' + this.fakerimgService.getImg();
    }
}
