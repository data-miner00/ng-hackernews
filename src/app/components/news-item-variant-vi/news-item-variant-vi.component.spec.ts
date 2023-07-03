import { NewsItemVariantViSteps } from './news-item-variant-vi.component.steps';

describe('NewsItemVariantViComponent', () => {
  let steps: NewsItemVariantViSteps;

  beforeEach(async () => {
    steps = new NewsItemVariantViSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render the props properly', () => {
    const id = 123;
    const title = 'This is a title';
    const description = 'This is a description';
    const imgSrc = 'img.jpg';
    const imgDescription = 'This is a img description';

    steps
      .givenIHaveRequiredProps(id, title, description, imgSrc, imgDescription)
      .whenIDetectChanges()
      .whenIQuery('a')
      .thenIExpectElementToHaveAttribute('href', '/stories/123')
      .whenIQuery('picture source')
      .thenIExpectElementToHaveAttribute('srcset', imgSrc)
      .whenIQuery('picture img')
      .thenIExpectElementToHaveAttribute('alt', imgDescription)
      .thenIExpectElementToHaveAttribute('src', imgSrc)
      .whenIQuery('h3')
      .thenIExpectElementToHaveTextContent(title)
      .whenIQuery('p')
      .thenIExpectElementToHaveTextContent(description);
  });
});
