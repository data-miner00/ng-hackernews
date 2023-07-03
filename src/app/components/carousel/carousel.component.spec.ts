import { CarouselSteps } from './carousel.component.steps';

describe('CarouselComponent', () => {
  let steps: CarouselSteps;

  beforeEach(async () => {
    steps = new CarouselSteps();
    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should have 6 images', () => {
    steps.whenIQueryAll('.animate-slideshow').thenIExpectQueryToHaveHits(6);
  });
});
