import { MacroNewsLayoutISteps } from './macro-news-layout-i.component.steps';

describe('MacroNewsLayoutIComponent', () => {
  let steps: MacroNewsLayoutISteps;

  beforeEach(async () => {
    steps = new MacroNewsLayoutISteps();

    steps.givenIHaveImageFileName('fake-img.png');
    await steps.whenISetup();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should have correct image path', () => {
    steps
      .whenIDetectChanges()
      .thenIExpectImagePathToBe('/assets/images/fake-img.png');
  });
});
