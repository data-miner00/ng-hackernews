import { generateStories } from 'src/app/test-utils/story-builder';

import { ShowStoriesSteps } from './show-stories.component.steps';

describe('ShowStoriesComponent', () => {
  let steps: ShowStoriesSteps;

  beforeEach(async () => {
    steps = new ShowStoriesSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should fetch stories when loaded', () => {
    const stories = generateStories(8);

    steps
      .givenHnServiceShowStoriesReturns(stories)
      .whenIDetectChanges()
      .thenIExpectHnShowStoriesToHaveBeenCalledTimes(1)
      .thenIExpectStoriesArrayToHaveLength(stories.length)
      .thenIExpectStoiesToBe(stories);

    steps
      .whenIQueryAll('app-news-item')
      .thenIExpectQueryToHaveHits(stories.length);
  });
});
