import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HackernewsService } from './hackernews.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const baseUrl: string = 'https://hacker-news.firebaseio.com/v0';

describe('HackernewsService', () => {
  let service: HackernewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [HackernewsService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});

    service = TestBed.inject(HackernewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const httpEndpointTestScenarios = [
    {
      for: 'maxitem',
      callHttpMethod: () => service.maxitem().subscribe(),
      url: `${baseUrl}/maxitem.json`,
    },
    {
      for: 'topstories',
      callHttpMethod: () => service.topstories().subscribe(),
      url: `${baseUrl}/topstories.json`,
    },
    {
      for: 'askstories',
      callHttpMethod: () => service.askstories().subscribe(),
      url: `${baseUrl}/askstories.json`,
    },
    {
      for: 'showstories',
      callHttpMethod: () => service.showstories().subscribe(),
      url: `${baseUrl}/showstories.json`,
    },
    {
      for: 'jobstories',
      callHttpMethod: () => service.jobstories().subscribe(),
      url: `${baseUrl}/jobstories.json`,
    },
    {
      for: 'updates',
      callHttpMethod: () => service.updates().subscribe(),
      url: `${baseUrl}/updates.json`,
    },
  ];

  httpEndpointTestScenarios.forEach((scenario) => {
    it(`should call ${scenario.url} when ${scenario.for} is invoked`, () => {
      scenario.callHttpMethod();

      const req = httpMock.expectOne(scenario.url);
      expect(req.request.method).toBe('GET');
    });
  });
});
