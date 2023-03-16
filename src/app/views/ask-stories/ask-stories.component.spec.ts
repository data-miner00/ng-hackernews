import Story from 'src/app/models/hackernews/Item/Story';
import { AskStoriesSteps } from './ask-stories.component.steps';

describe('AskStoriesComponent', () => {
  let steps: AskStoriesSteps;

  beforeEach(async () => {
    steps = new AskStoriesSteps();

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
      title: 'An ask story title',
      url: 'https://www.youtube.com/video/abcd.html',
      time: 1639118165,
      kids: [],
      by: 'ariana99',
    };

    steps
      .givenMaxStoriesAmountIs(amount)
      .whenHnServiceAskStoriesReturns(array)
      .whenHnServiceItemReturn(story)
      .whenIDetectChanges()
      .thenIExpectHnAskStoriesToHaveBeenCalled()
      .thenIExpectHnItemToHaveBeenCalledTimes(amount)
      .thenIExpectStoriesArrayToHaveLength(amount)
      .thenIExpectSubscriptionQueueToHaveLength(amount);
  });
});
