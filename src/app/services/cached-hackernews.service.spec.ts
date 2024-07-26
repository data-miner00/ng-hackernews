import { CachedHackernewsServiceSteps } from './cached-hackernews.service.steps';

import { generateStories } from '../test-utils/story-builder';

describe('CachedHackernewsService', () => {
  let steps: CachedHackernewsServiceSteps;

  beforeEach(async () => {
    steps = new CachedHackernewsServiceSteps();

    await steps.givenISetupAsync();
  });

  it('should be created', () => {
    steps.thenIExpectServiceInitializedSuccessfully();
  });

  describe('Top Stories', () => {
    it('should call service when local cache is empty and use cache subsequently', () => {
      const itemIds = [1, 2, 3, 4, 5];
      const stories = generateStories(5);

      steps
        .givenHnServiceTopStoriesReturns(itemIds)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedTopStories()
        .thenIExpectHnServiceTopStoriesCalled(1)
        .thenIExpectHnServiceItemCalled(5)
        .thenIExpectResultToBe(stories);

      steps
        .whenICallCachedTopStories()
        .thenIExpectHnServiceTopStoriesCalled(1) // not increasing
        .thenIExpectResultToBe(stories);
    });

    it('should only get top 20 items when return 21 items', () => {
      const itemIds = [...Array(21).keys()].map((i) => i + 1);
      const stories = generateStories(21);
      const expectedStories = stories.slice(0, -1);

      steps
        .givenHnServiceTopStoriesReturns(itemIds)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedTopStories()
        .thenIExpectHnServiceTopStoriesCalled(1)
        .thenIExpectHnServiceItemCalled(20)
        .thenIExpectResultToBe(expectedStories);
    });
  });

  describe('Ask Stories', () => {
    it('should call service when local cache is empty and use cache subsequently', () => {
      const itemIds = [1, 2, 3, 4, 5];
      const stories = generateStories(5);

      steps
        .givenHnServiceAskStoriesReturns(itemIds)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedAskStories()
        .thenIExpectHnServiceAskStoriesCalled(1)
        .thenIExpectHnServiceItemCalled(5)
        .thenIExpectResultToBe(stories);

      steps
        .whenICallCachedAskStories()
        .thenIExpectHnServiceAskStoriesCalled(1) // not increasing
        .thenIExpectResultToBe(stories);
    });

    it('should only get top 20 items when return 21 items', () => {
      const itemIds = [...Array(21).keys()].map((i) => i + 1);
      const stories = generateStories(21);
      const expectedStories = stories.slice(0, -1);

      steps
        .givenHnServiceAskStoriesReturns(itemIds)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedAskStories()
        .thenIExpectHnServiceAskStoriesCalled(1)
        .thenIExpectHnServiceItemCalled(20)
        .thenIExpectResultToBe(expectedStories);
    });
  });

  describe('Show Stories', () => {
    it('should call service when local cache is empty and use cache subsequently', () => {
      const itemIds = [1, 2, 3, 4, 5];
      const stories = generateStories(5);

      steps
        .givenHnServiceShowStoriesReturns(itemIds)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedShowStories()
        .thenIExpectHnServiceShowStoriesCalled(1)
        .thenIExpectHnServiceItemCalled(5)
        .thenIExpectResultToBe(stories);

      steps
        .whenICallCachedShowStories()
        .thenIExpectHnServiceShowStoriesCalled(1) // not increasing
        .thenIExpectResultToBe(stories);
    });

    it('should only get top 20 items when return 21 items', () => {
      const itemIds = [...Array(21).keys()].map((i) => i + 1);
      const stories = generateStories(21);
      const expectedStories = stories.slice(0, -1);

      steps
        .givenHnServiceShowStoriesReturns(itemIds)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedShowStories()
        .thenIExpectHnServiceShowStoriesCalled(1)
        .thenIExpectHnServiceItemCalled(20)
        .thenIExpectResultToBe(expectedStories);
    });
  });

  describe('Job Stories', () => {
    it('should call service when local cache is empty and use cache subsequently', () => {
      const itemIds = [1, 2, 3, 4, 5];
      const stories = generateStories(5);

      steps
        .givenHnServiceJobStoriesReturns(itemIds)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedJobStories()
        .thenIExpectHnServiceJobStoriesCalled(1)
        .thenIExpectHnServiceItemCalled(5)
        .thenIExpectResultToBe(stories);

      steps
        .whenICallCachedJobStories()
        .thenIExpectHnServiceJobStoriesCalled(1) // not increasing
        .thenIExpectResultToBe(stories);
    });

    it('should only get top 20 items when return 21 items', () => {
      const itemIds = [...Array(21).keys()].map((i) => i + 1);
      const stories = generateStories(21);
      const expectedStories = stories.slice(0, -1);

      steps
        .givenHnServiceJobStoriesReturns(itemIds)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedJobStories()
        .thenIExpectHnServiceJobStoriesCalled(1)
        .thenIExpectHnServiceItemCalled(20)
        .thenIExpectResultToBe(expectedStories);
    });
  });
});
