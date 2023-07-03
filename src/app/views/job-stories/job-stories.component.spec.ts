import Story from 'src/app/models/hackernews/Item/Story';
import { JobStoriesSteps } from './job-stories.component.steps';

describe('JobStoriesComponent', () => {
  let steps: JobStoriesSteps;

  beforeEach(async () => {
    steps = new JobStoriesSteps();

    await steps.givenISetupAsync();
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
      title: 'A pffocoal story title',
      url: 'https://www.youtube.com/video/absc.html',
      time: 1639118165,
      kids: [],
      by: 'samira566',
    };

    steps
      .givenMaxStoriesAmountIs(amount)
      .whenISpyOnHnServiceJobStoriesToReturn(array)
      .whenISpyOnHnServiceItemToReturn(story)
      .whenIDetectChanges()
      .thenIExpectHnJobStoriesToHaveBeenCalled()
      .thenIExpectHnItemToHaveBeenCalledTimes(amount)
      .thenIExpectStoriesArrayToHaveLength(amount)
      .thenIExpectSubscriptionQueueToHaveLength(amount);
  });
});
