import { DurationElapsedPipe } from './duration-elapsed.pipe';

describe('DurationElapsedPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationElapsedPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display time elapsed correctly based on date provided', () => {
    jasmine.clock().install();
    const baseTime = new Date(2013, 9, 23);
    jasmine.clock().mockDate(baseTime);

    const date: Date = new Date(2013, 9, 4);

    const pipe = new DurationElapsedPipe();

    expect(pipe.transform(date)).toBe('19 days ago');

    jasmine.clock().uninstall();
  });
});
