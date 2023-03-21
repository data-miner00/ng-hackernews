import { FullWidthAdsSteps } from './full-width-ads.component.steps';

describe('FullWidthAdsComponent', () => {
  let steps: FullWidthAdsSteps;

  beforeEach(() => {
    steps = new FullWidthAdsSteps();
  });

  it('should create', async () => {
    await steps.givenISetupAsync();
    steps.thenIExpectComponentToBeConstructed();
  });
});
