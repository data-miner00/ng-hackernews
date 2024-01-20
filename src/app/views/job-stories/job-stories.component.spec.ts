import { JobStoriesSteps } from './job-stories.component.steps';
import { generateStories } from 'src/app/test-utils/story-builder';

describe('JobStoriesComponent', () => {
  let steps: JobStoriesSteps;

  beforeEach(async () => {
    steps = new JobStoriesSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should fetch stories when loaded', () => {
    const stories = generateStories(14);

    steps
      .givenHnServiceJobStoriesReturn(stories)
      .whenIDetectChanges()
      .thenIExpectHnJobStoriesToHaveBeenCalledTimes(1)
      .thenIExpectStoriesArrayToHaveLength(stories.length)
      .thenIExpectStoriesToBe(stories);

    steps
      .whenIQueryAll('app-news-item')
      .thenIExpectQueryToHaveHits(stories.length);
  });
});
