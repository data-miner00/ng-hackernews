import { elapsed, Time } from './date';

describe('Date utilities', () => {
  // 12/12/2021 12.30 a.m.
  const timestamp = 1639240237314;

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(timestamp));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  [
    {
      type: 'hours',
      parameters: {
        unixTime: 1638970365,
        time: Time.Hours,
      },
      expected: 74,
    },
    {
      type: 'days',
      parameters: {
        unixTime: 1638970365,
        time: Time.Days,
      },
      expected: 3,
    },
    {
      type: 'weeks',
      parameters: {
        unixTime: 1638970365,
        time: Time.Weeks,
      },
      expected: 0,
    },
  ].forEach((scenario) => {
    it(`should calculate the correct elapsed time in ${scenario.type}`, () => {
      const actual = elapsed(
        scenario.parameters.unixTime,
        scenario.parameters.time
      );

      expect(actual).toBe(scenario.expected);
    });
  });
});
