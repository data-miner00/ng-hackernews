import { FooterSteps } from './footer.component.steps';

describe('FooterComponent', () => {
  let steps: FooterSteps;

  beforeEach(async () => {
    steps = new FooterSteps();
    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });
});
