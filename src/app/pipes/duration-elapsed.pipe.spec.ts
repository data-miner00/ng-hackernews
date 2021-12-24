import { DurationElapsedPipe } from './duration-elapsed.pipe';

describe('DisplayableDatePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationElapsedPipe();
    expect(pipe).toBeTruthy();
  });
});
