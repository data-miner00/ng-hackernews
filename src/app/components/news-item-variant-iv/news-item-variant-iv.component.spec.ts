import { NewsItemVariantIvSteps } from './news-item-variant-iv.component.steps';

describe('NewsItemVariantIvComponent', () => {
  let steps: NewsItemVariantIvSteps;

  const id = 123;
  const title = 'This is a title';
  const author = 'Stephen Graham';

  beforeEach(async () => {
    steps = new NewsItemVariantIvSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render required props correctly', () => {
    steps
      .givenIHaveRequiredProps(id, author, title)
      .whenIDetectChanges()
      .whenIQuery('a')
      .thenIExpectElementToHaveAttribute('href', '/stories/123')
      .whenIQuery('.author')
      .thenIExpectElementToHaveTextContent(author)
      .whenIQuery('h3')
      .thenIExpectElementToHaveTextContent(title);
  });

  it('should render avatar when avatar url is provided', () => {
    const avatarUrl = 'avatar.jpg';

    steps
      .givenIHaveRequiredProps(id, author, title)
      .givenIHaveAvatarUrl(avatarUrl)
      .whenIDetectChanges()
      .whenIQuery('.avatar img')
      .thenIExpectElementToExist()
      .thenIExpectElementToHaveAttribute('src', avatarUrl)
      .thenIExpectElementToHaveAttribute('alt', author);
  });

  it('should render content img if img url is provided', () => {
    const imgUrl = 'content.jpg';

    steps
      .givenIHaveRequiredProps(id, author, title)
      .givenIHaveContentImgUrl(imgUrl)
      .whenIDetectChanges()
      .whenIQuery('.content-img img')
      .thenIExpectElementToExist()
      .thenIExpectElementToHaveAttribute('src', imgUrl)
      .thenIExpectElementToHaveAttribute('alt', title);
  });
});
