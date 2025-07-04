import { ReadLaterComponentSteps } from './read-later.component.steps';

describe('ReadLaterComponent', () => {
  let steps: ReadLaterComponentSteps;

  beforeEach(async () => {
    steps = new ReadLaterComponentSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });
});
