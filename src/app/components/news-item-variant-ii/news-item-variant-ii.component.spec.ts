import { NewsItemVariantIiComponentSteps } from './news-item-variant-ii.component.steps';

describe('NewsItemVariantIiComponent', () => {
  let steps: NewsItemVariantIiComponentSteps;

  const id = 123;
  const title = 'This is a title';

  beforeEach(async () => {
    steps = new NewsItemVariantIiComponentSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render id and title correctly and not render other unused UI', () => {
    steps
      .givenIHaveRequiredProps(id, title)
      .whenIDetectChanges()
      .whenIQuery('a')
      .thenIExpectElementToHaveAttribute('href', '/stories/123')
      .whenIQuery('h3')
      .thenIExpectElementToHaveTextContent(title)
      .thenIExpectElementNotToHaveClasses([
        'text-md',
        'text-lg',
        'mb-md',
        'mb-lg',
      ]);

    steps
      .whenIQuery('.avatar-container')
      .thenIExpectElementToNotExist()
      .whenIQuery('.author')
      .thenIExpectElementToNotExist()
      .whenIQuery('.description')
      .thenIExpectElementToNotExist();
  });

  it('should render avatar when avatarUrl is not undefined', () => {
    const avatarUrl = 'www.avatarurl.com.jpg';

    steps
      .givenIHaveRequiredProps(id, title)
      .givenIHaveAvatarUrl(avatarUrl)
      .whenIDetectChanges()
      .whenIQuery('.avatar-container img')
      .thenIExpectElementToExist()
      .thenIExpectElementToHaveAttribute('src', avatarUrl);
  });

  it('should render author when author is not undefined', () => {
    const author = 'Jimmy Jones';

    steps
      .givenIHaveRequiredProps(id, title)
      .givenIHaveAuthor(author)
      .whenIDetectChanges()
      .whenIQuery('.author')
      .thenIExpectElementToExist()
      .thenIExpectElementToHaveTextContent(author);
  });

  it('should render description when description is not undefined', () => {
    const description = 'This is a description';

    steps
      .givenIHaveRequiredProps(id, title)
      .givenIHaveDescription(description)
      .whenIDetectChanges()
      .whenIQuery('.description')
      .thenIExpectElementToExist()
      .thenIExpectElementToHaveTextContent(description);
  });

  describe('Title Class', () => {
    [
      {
        description: 'should render empty class when both undefined',
        titleFontSize: undefined,
        titleMarginBottom: undefined,
        expectedTitleClass: '',
      },
      {
        description:
          'should render title font size only when title margin bottom not provided',
        titleFontSize: 'text-md',
        titleMarginBottom: undefined,
        expectedTitleClass: 'text-md',
      },
      {
        description:
          'should render both font size and margin bottom side by side',
        titleFontSize: 'text-lg',
        titleMarginBottom: 'mb-md',
        expectedTitleClass: 'mb-md text-lg', // angular will sort the class alphabetically
      },
      {
        description:
          'should render title margin bottom only when title font size not provided',
        titleFontSize: undefined,
        titleMarginBottom: 'mb-lg',
        expectedTitleClass: 'mb-lg',
      },
    ].forEach((scenario) => {
      it(scenario.description, () => {
        steps
          .givenIHaveRequiredProps(id, title)
          .givenIHaveTitleFontSize(scenario.titleFontSize as any)
          .givenIHaveTitleMarginBottom(scenario.titleMarginBottom as any)
          .whenIDetectChanges()
          .whenIQuery('h3')
          .thenIExpectElementClassListToBe(scenario.expectedTitleClass);
      });
    });
  });
});
