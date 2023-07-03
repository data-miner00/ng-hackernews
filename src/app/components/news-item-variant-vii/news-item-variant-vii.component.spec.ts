import { NewsItemVariantViiSteps } from './news-item-variant-vii.component.steps';

describe('NewsItemVariantViiComponent', () => {
  let steps: NewsItemVariantViiSteps;

  beforeEach(async () => {
    steps = new NewsItemVariantViiSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render the props correctly', () => {
    const id = 123;
    const title = 'This is a title';

    steps
      .givenIHaveRequiredProps(id, title)
      .whenIDetectChanges()
      .whenIQuery('a')
      .thenIExpectElementToHaveAttribute('href', '/stories/123')
      .thenIExpectElementToHaveTextContent(title);
  });
});
