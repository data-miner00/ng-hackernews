import { CarouselSteps } from './carousel.component.steps';

describe('CarouselComponent', () => {
  let steps: CarouselSteps;

  beforeEach(() => {
    steps = new CarouselSteps();
  });

  it('should create', async () => {
    await steps.whenISetup();

    steps.thenIExpectComponentToBeConstructed();
  });

  it('should have 6 images', async () => {
    await steps.whenISetup();

    steps.whenIQueryAll('.animate-slideshow').thenIExpectQueryToHaveHits(6);
  });
});
