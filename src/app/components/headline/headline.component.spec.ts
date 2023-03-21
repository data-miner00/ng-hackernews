import { HeadlineSteps } from './headline.component.steps';

describe('HeadlineComponent', () => {
  let steps: HeadlineSteps;

  beforeEach(async () => {
    steps = new HeadlineSteps();
    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should update headline', () => {
    const headline = 'This is a headline';

    steps
      .givenIHaveTheFollowingHeadline(headline)
      .whenIDetectChanges()
      .whenIQuery('h1')
      .thenIExpectElementToHaveTextContent(headline);
  });
});
