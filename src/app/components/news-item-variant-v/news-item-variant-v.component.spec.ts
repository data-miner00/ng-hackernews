import { NewsItemVariantVSteps } from './news-item-variant-v.component.steps';

describe('NewsItemVariantVComponent', () => {
  let steps: NewsItemVariantVSteps;

  const id = 123;
  const title = 'This is a title';
  const description = 'This is a description';

  beforeEach(async () => {
    steps = new NewsItemVariantVSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render the required props correctly', () => {
    steps
      .givenIHaveRequiredProps(id, title, description)
      .whenIDetectChanges()
      .whenIQuery('a')
      .thenIExpectElementToHaveAttribute('href', '/stories/123')
      .whenIQuery('a > div')
      .thenIExpectElementToHaveClass('lefty')
      .thenIExpectElementNotToHaveClass('left')
      .whenIQuery('h3')
      .thenIExpectElementToHaveTextContent(title)
      .whenIQuery('p')
      .thenIExpectElementToHaveTextContent(description)
      .whenIQuery('.right')
      .thenIExpectElementToNotExist();
  });
});
