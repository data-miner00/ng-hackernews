import { Component, OnInit } from '@angular/core';
import { FakerimgService } from 'src/app/services/fakerimg.service';

@Component({
    selector: 'app-macro-news-layout-i',
    templateUrl: './macro-news-layout-i.component.html',
    styleUrls: ['./macro-news-layout-i.component.sass'],
})
export class MacroNewsLayoutIComponent implements OnInit {
    constructor(private fakerimgService: FakerimgService) {}

    public headline: string =
        'J.D. Vance Wins Republican Senate Primary in Ohio';

    // Big story
    public story5 = {
        title: 'Ohio U.S. Senate Results',
        imagePath: '',
        caption:
            'Thousands inundated New York City for gender equality protest',
        description:
            'Fstesf, author of Lisp in Space, have sparkled a thread over 1311 comments and 290 upvotes as of now.',
    };

    ngOnInit(): void {
        this.story5.imagePath =
            '/assets/images/' + this.fakerimgService.getImg();
    }
}
