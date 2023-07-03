import { AsideNewsLayoutSteps } from './aside-news-layout.component.steps';

describe('AsideNewsLayoutComponent', () => {
  let steps: AsideNewsLayoutSteps;

  beforeEach(async () => {
    steps = new AsideNewsLayoutSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });
});
