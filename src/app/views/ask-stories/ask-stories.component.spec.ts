import { generateStories } from 'src/app/test-utils/story-builder';

import { AskStoriesSteps } from './ask-stories.component.steps';

describe('AskStoriesComponent', () => {
  let steps: AskStoriesSteps;

  beforeEach(async () => {
    steps = new AskStoriesSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should fetch stories according to storiesAmount', () => {
    const stories = generateStories(8);

    steps
      .givenHnServiceAskStoriesReturns(stories)
      .whenIDetectChanges()
      .thenIExpectHnAskStoriesToHaveBeenCalledTimes(1)
      .thenIExpectStoriesArrayToHaveLength(stories.length)
      .thenIExpectStoriesToBe(stories);

    steps
      .whenIQueryAll('app-news-item')
      .thenIExpectQueryToHaveHits(stories.length);
  });
});
