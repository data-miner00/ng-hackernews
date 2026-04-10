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

  describe('Random Stories', () => {
    it('should call service when local cache is empty and use cache subsequently', () => {
      const maxId = 1000;
      const stories = generateStories(100);

      steps
        .givenHnServiceMaxItemReturns(maxId)
        .givenHnServiceItemSequentiallyReturns(stories)
        .whenICallCachedRandomStories()
        .thenIExpectHnServiceMaxItemCalled(1)
        .thenIExpectHnServiceItemCalled(100)
        .thenIExpectResultToBe(stories.slice(0, 20));

      steps
        .whenICallCachedRandomStories()
        .thenIExpectHnServiceMaxItemCalled(1) // not increasing
        .thenIExpectResultToBe(stories.slice(0, 20));
    });

    it('should fetch more batches if first batch does not have enough stories', () => {
      const maxId = 1000;
      const mixedItems: any[] = [];
      for (let i = 0; i < 90; i++) {
        mixedItems.push({ id: i, type: 'comment' });
      }
      for (let i = 90; i < 200; i++) {
        mixedItems.push({ id: i, title: `Story no. ${i}`, type: 'story' });
      }

      const expectedStories = mixedItems.filter((x: any) => x.type === 'story').slice(0, 20);

      steps
        .givenHnServiceMaxItemReturns(maxId)
        .givenHnServiceItemSequentiallyReturns(mixedItems as any)
        .whenICallCachedRandomStories()
        .thenIExpectHnServiceMaxItemCalled(1)
        .thenIExpectHnServiceItemCalled(150)
        .thenIExpectResultToBe(expectedStories);
    });
  });
});
