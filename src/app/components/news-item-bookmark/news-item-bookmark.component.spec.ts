import { DatePipe } from '@angular/common';

import { NewsItemBookmarkComponentSteps } from './news-item-bookmark.component.steps';

describe('NewsItemBookmarkComponent', () => {
  let steps: NewsItemBookmarkComponentSteps;

  beforeEach(async () => {
    steps = new NewsItemBookmarkComponentSteps();

    await steps.givenISetupAsync();
  });

  beforeEach(() => {
    steps.givenIHaveNewsDetails({
      by: 'janeson516',
      url: 'https://www.example.com/notes/52888',
      descendants: 40,
      id: 123456789,
      score: 234,
      title: 'General rule of thumb for Heincwf',
      type: 'story',
      time: 1639118165,
    });
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render domain, comment counts, upvotes and date correctly', () => {
    const datePipe = new DatePipe('en-US');
    const domain = 'www.example.com';

    steps.whenIDetectChanges();

    const posted = datePipe.transform(steps.component.posted, 'MMMM d, yyyy');

    steps
      .whenIQuery('.info')
      .thenIExpectElementToHaveTextContent(
        `${domain} | ${steps.component.descendants} comments | ${steps.component.score} upvotes | ${posted}`
      );
  });

  describe('url-domain rendering', () => {
    const urlTestScenario = [
      {
        condition: 'full url with HTTPS',
        url: 'https://www.youtube.com/watch?id=123456',
        domain: 'www.youtube.com',
      },
      {
        condition: 'full url with HTTP',
        url: 'http://www.youtube.com/watch?id=123456',
        domain: 'www.youtube.com',
      },
      {
        condition: 'domain itself with HTTPS',
        url: 'https://www.youtube.com',
        domain: 'www.youtube.com',
      },
      {
        condition: 'url variation without www',
        url: 'https://angular.io/guide/testing-components-scenarios',
        domain: 'angular.io',
      },
      {
        condition: 'empty url',
        url: '',
        domain: 'unknown.com',
      },
    ];

    urlTestScenario.forEach((scenario) => {
      it(`should render correct domain given ${scenario.condition}`, () => {
        steps
          .whenIQuery('.info')
          .thenIExpectDomainToBeUndefined()
          .whenISetUrlTo(scenario.url)
          .whenIDetectChanges()
          .thenIExpectDomainToBe(scenario.domain)
          .thenIExpectElementToHaveTextContent(scenario.domain);
      });
    });
  });

  describe('favourites functionality', () => {
    it('should add to favourites', () => {
      steps
        .whenIDetectChanges()
        .whenIQuery('button[title="Save to favourites"]')
        .whenIClick()
        .whenIDetectChanges()
        .thenIExpectAddFavouritesToHaveBeenCalledWith(steps.component.id);
    });

    it('should remove from favourites', () => {
      steps
        .givenThisIsAlreadyAddedToFavourites()
        .whenIDetectChanges()
        .whenIQuery('button[title="Remove from favourites"]')
        .whenIClick()
        .whenIDetectChanges()
        .thenIExpectRemoveFavouritesToHaveBeenCalledWith(steps.component.id);
    });
  });
});
