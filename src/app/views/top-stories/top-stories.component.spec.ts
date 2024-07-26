import { generateStories } from 'src/app/test-utils/story-builder';

import { TopStoriesSteps } from './top-stories.component.steps';

describe('TopStoriesComponent', () => {
  let steps: TopStoriesSteps;

  beforeEach(async () => {
    steps = new TopStoriesSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should fetch stories according to when loaded', () => {
    const stories = generateStories(5);

    steps
      .givenHnServiceTopStoriesReturns(stories)
      .whenIDetectChanges()
      .thenIExpectHnTopStoriesToHaveBeenCalledTimes(1)
      .thenIExpectStoriesArrayToHaveLength(stories.length)
      .thenIExpectStoriesToBe(stories);

    steps
      .whenIQueryAll('app-news-item')
      .thenIExpectQueryToHaveHits(stories.length);
  });
});
