import { NewsItemVariantISteps } from './news-item-variant-i.component.steps';

describe('NewsItemVariantIComponent', () => {
  let steps: NewsItemVariantISteps;

  beforeEach(async () => {
    steps = new NewsItemVariantISteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render the props correctly', () => {
    const id = 123;
    const title = 'This is a title';
    const description = 'This is a description';

    steps
      .givenIHaveTheProps(id, title, description)
      .whenIDetectChanges()
      .whenIQuery('a')
      .thenIExpectElementToHaveAttribute('href', '/stories/123')
      .whenIQuery('h1')
      .thenIExpectElementToHaveTextContent(title)
      .whenIQuery('p')
      .thenIExpectElementToHaveTextContent(description);
  });
});
