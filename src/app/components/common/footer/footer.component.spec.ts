import { FooterSteps } from './footer.component.steps';

describe('FooterComponent', () => {
  let steps: FooterSteps;

  beforeEach(() => {
    steps = new FooterSteps();
  });

  it('should create', async () => {
    await steps.whenISetup();

    steps.thenIExpectComponentToBeConstructed();
  });
});
