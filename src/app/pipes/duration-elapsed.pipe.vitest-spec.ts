import { DurationElapsedPipe } from './duration-elapsed.pipe';

describe('DurationElapsedPipe (vitest)', () => {
    const pipe = new DurationElapsedPipe();

    // `elapsed()` truncates to whole seconds before dividing, so add a couple
    // of seconds of buffer to avoid flaking on a sub-second rounding boundary.
    it('formats a date from minutes ago', () => {
        const date = new Date(Date.now() - (5 * 60 + 2) * 1000);
        expect(pipe.transform(date)).toBe('5 minutes ago');
    });

    it('formats a date from hours ago', () => {
        const date = new Date(Date.now() - (3 * 60 * 60 + 2) * 1000);
        expect(pipe.transform(date)).toBe('3 hours ago');
    });

    it('formats a date from days ago', () => {
        const date = new Date(Date.now() - (2 * 24 * 60 * 60 + 2) * 1000);
        expect(pipe.transform(date)).toBe('2 days ago');
    });
});
