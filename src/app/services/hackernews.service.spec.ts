import {
    HttpClient,
    HttpClientModule,
    HttpHandler,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HackernewsService } from './hackernews.service';

describe('HackernewsService', () => {
    let service: HackernewsService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HttpClient, HttpHandler],
        });
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = TestBed.inject(HackernewsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
