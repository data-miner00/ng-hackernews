import { ImageSteps } from './image.component.steps';

describe('ImageComponent', () => {
  let steps: ImageSteps;

  beforeEach(async () => {
    steps = new ImageSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should bind srcset to source correctly', () => {
    const src = 'https://www.google.com/logo.png';

    steps
      .givenIHaveImageSrc(src)
      .whenIDetectChanges()
      .whenIQuery('figure picture source')
      .thenIExpectElementToHaveAttribute('srcset', src);
  });

  describe('inset attribute tests', () => {
    it('should have `inset` class when inset is true', () => {
      steps
        .givenIHaveInsetValue(true)
        .whenIDetectChanges()
        .whenIQuery('figure')
        .thenIExpectElementToHaveClass('inset');
    });

    it('should not have `inset` class when inset is false', () => {
      steps
        .givenIHaveInsetValue(false)
        .whenIDetectChanges()
        .whenIQuery('figure')
        .thenIExpectElementNotToHaveClass('inset');
    });
  });

  it('should bind description to alt text correctly for img', () => {
    const description = 'A short description.';

    steps
      .givenIHaveDescription(description)
      .whenIDetectChanges()
      .whenIQuery('figure picture img')
      .thenIExpectElementToHaveAttribute('alt', description);
  });

  it('should render description figcaption correctly', () => {
    const description = 'A short description.';

    steps
      .givenIHaveDescription(description)
      .givenIHaveCaptionClass('left')
      .whenIDetectChanges()
      .whenIQuery('figcaption')
      .thenIExpectElementToExist()
      .thenIExpectElementToHaveTextContent(description)
      .thenIExpectElementToHaveClass('left');
  });

  it('should not render description figcaption if no description is provided', () => {
    steps
      .givenIHaveDescription('')
      .whenIDetectChanges()
      .whenIQuery('figcaption')
      .thenIExpectElementToNotExist();
  });
});
