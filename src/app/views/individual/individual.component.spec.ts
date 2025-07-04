import { DatePipe } from '@angular/common';

import { DurationElapsedPipe } from 'src/app/pipes/duration-elapsed.pipe';

import { IndividualComponentSteps } from './individual.component.steps';

describe('IndividualComponent', () => {
  let steps: IndividualComponentSteps;

  beforeEach(async () => {
    steps = new IndividualComponentSteps();
    await steps.givenISetupAsync();

    steps.givenHackernewsItemReturns({
      id: 123456,
      deleted: false,
      type: 'story',
      by: 'maxxx',
      time: 1639118165,
      dead: false,
      kids: [],
      descendants: 10,
      score: 20,
      title: 'Fizer is so good',
      url: 'https://www.example.com/test/some.html',
    });
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should render title correctly', () => {
    steps
      .whenIDetectChanges()
      .whenIQuery('.individual h1')
      .thenIExpectElementTextToBeExactly('Fizer is so good');
  });

  it('should render author correctly', () => {
    steps
      .whenIDetectChanges()
      .whenIQuery('.author')
      .thenIExpectElementToHaveTextContent('maxxx');
  });

  it('should render the score properly', () => {
    steps
      .whenIDetectChanges()
      .whenIQuery('.date')
      .thenIExpectElementToHaveTextContent('20 upvotes');
  });

  it('should render the date posted correctly', () => {
    steps.whenIDetectChanges().whenIQuery('.date');

    const durationElapsedPipe = new DurationElapsedPipe();
    const datePipe = new DatePipe('en-US');

    const date = new Date(1639118165 * 1000);

    const formattedDate = datePipe.transform(date, 'MMM d');
    const durationElapsed = durationElapsedPipe.transform(date);

    steps
      .thenIExpectElementToHaveTextContent(`${formattedDate}`)
      .thenIExpectElementToHaveTextContent(`${durationElapsed}`);
  });
});
