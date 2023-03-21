import { FullWidthAdsSteps } from './full-width-ads.component.steps';

describe('FullWidthAdsComponent', () => {
  let steps: FullWidthAdsSteps;

  beforeEach(async () => {
    steps = new FullWidthAdsSteps();
    await steps.givenISetupAsync();
  });

  it('should create', async () => {
    steps.thenIExpectComponentToBeConstructed();
  });
});
