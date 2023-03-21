import { HeadlineSteps } from './headline.component.steps';

describe('HeadlineComponent', () => {
  let steps: HeadlineSteps;

  beforeEach(() => {
    steps = new HeadlineSteps();
  });

  it('should create', async () => {
    await steps.givenISetupAsync();
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should update headline', async () => {
    const headline = 'This is a headline';

    await steps.givenISetupAsync();

    steps
      .givenIHaveTheFollowingHeadline(headline)
      .whenIDetectChanges()
      .whenIQuery('h1')
      .thenIExpectElementToHaveTextContent(headline);
  });
});
