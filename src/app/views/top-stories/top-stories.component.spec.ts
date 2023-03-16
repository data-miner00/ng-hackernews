import type Story from 'src/app/models/hackernews/Item/Story';
import { TopStoriesSteps } from './top-stories.component.steps';

describe('TopStoriesComponent', () => {
  let steps: TopStoriesSteps;

  beforeEach(async () => {
    steps = new TopStoriesSteps();

    await steps.whenISetup();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should fetch stories according to storiesAmount', () => {
    const amount = 5;
    const array = [1, 2, 3, 4, 5, 6, 7];
    const story = <Story>{
      id: 1,
      type: 'story',
      descendants: 355,
      score: 606,
      title: 'A show story title',
      url: 'https://www.youtube.com/video/abcd.html',
      time: 1639118165,
      kids: [],
      by: 'ariana99',
    };

    steps
      .givenMaxStoriesAmountIs(amount)
      .whenHnServiceTopStoriesReturns(array)
      .whenHnServiceItemReturn(story)
      .whenIDetectChanges()
      .thenIExpectHnTopStoriesToHaveBeenCalled()
      .thenIExpectHnItemToHaveBeenCalledTimes(amount)
      .thenIExpectStoriesArrayToHaveLength(amount)
      .thenIExpectSubscriptionQueueToHaveLength(amount);
  });
});
