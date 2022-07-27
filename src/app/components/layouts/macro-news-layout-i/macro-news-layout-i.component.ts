import { Component, OnInit } from '@angular/core';
import { FakerimgService } from 'src/app/services/fakerimg.service';

@Component({
    selector: 'app-macro-news-layout-i',
    templateUrl: './macro-news-layout-i.component.html',
    styleUrls: ['./macro-news-layout-i.component.sass'],
})
export class MacroNewsLayoutIComponent implements OnInit {
    constructor(private fakerimgService: FakerimgService) {}

    public imagePath: string;

    ngOnInit(): void {
        this.imagePath = '/assets/images/' + this.fakerimgService.getImg();
    }
}
