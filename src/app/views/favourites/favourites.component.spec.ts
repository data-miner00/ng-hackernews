import { FavouritesSteps } from './favourites.component.steps';

describe('FavouritesComponent', () => {
  let steps: FavouritesSteps;

  beforeEach(async () => {
    steps = new FavouritesSteps();

    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });
});
