export enum Time {
    Seconds = 1,
    Milliseconds = Seconds / 1000,
    Minutes = 60,
    Hours = Minutes * 60,
    Days = Hours * 24,
    Weeks = Days * 7,
    Months = Days * 30,
    Years = Months * 12,
}

/**
 * Calculates the amount of time elapsed from unix timestamp provided.
 *
 * @param unixTime Unix timestamp in seconds
 * @param time Time enumerable of desired conversion
 * @returns Total amount of time elapsed in @see Time
 */
export function elapsed(unixTime: number, time: Time): number {
    const elapsed = unixTime;
    const now = Date.now();

    const offset = Math.floor(now / 1000) - elapsed;

    return Math.floor(offset / time);
}
