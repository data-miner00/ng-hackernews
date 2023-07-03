import { NewsItemVariantIiiSteps } from './news-item-variant-iii.component.steps';

describe('NewsItemVariantIiiComponent', () => {
  let steps: NewsItemVariantIiiSteps;

  const id = 123;
  const title = 'This is a title';
  const description = 'This is a description';

  beforeEach(async () => {
    steps = new NewsItemVariantIiiSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render required props correctly', () => {
    steps
      .givenIHaveRequiredProps(id, title, description)
      .whenIDetectChanges()
      .whenIQuery('a')
      .thenIExpectElementToHaveAttribute('href', '/stories/123')
      .whenIQuery('.right h3')
      .thenIExpectElementToHaveTextContent(title)
      .whenIQuery('.right p')
      .thenIExpectElementToHaveTextContent(description);
  });

  it('should render avatar when avatar url is truthy', () => {
    const avatarUrl = 'http://avatar.url.jpg';

    steps
      .givenIHaveRequiredProps(id, title, description)
      .givenIHaveAvatarUrl(avatarUrl)
      .whenIDetectChanges()
      .whenIQuery('.avatar img')
      .thenIExpectElementToExist()
      .thenIExpectElementToHaveAttribute('src', avatarUrl);
  });
});
