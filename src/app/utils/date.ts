export enum Time {
    Seconds = 1,
    Miliseconds = Seconds / 1000,
    Minutes = 60,
    Hours = Minutes * 60,
    Days = Hours * 24,
    Weeks = Days * 7,
    Months = Days * 30,
    Years = Months * 12,
}

export function elapsed(unixTime: number, time: Time) {
    const elapsed = unixTime;
    const now = Date.now();

    const offset = Math.floor(now / 1000) - elapsed;

    return Math.floor(offset / time);
}
