import { Pipe, PipeTransform } from '@angular/core';
import { elapsed as _elapsed, Time } from '../utils/date';

@Pipe({
    name: 'durationElapsed',
})
export class DurationElapsedPipe implements PipeTransform {
    transform(value: Date): string {
        let durationElapsed: string;

        const unixInSeconds: number = value.getTime() / 1000;

        switch (true) {
            case _elapsed(unixInSeconds, Time.Days) > 0:
                durationElapsed = `${_elapsed(
                    unixInSeconds,
                    Time.Days
                )} days ago`;
                break;
            case _elapsed(unixInSeconds, Time.Hours) > 0:
                durationElapsed = `${_elapsed(
                    unixInSeconds,
                    Time.Hours
                )} hours ago`;
                break;
            default:
                durationElapsed = `${_elapsed(
                    unixInSeconds,
                    Time.Minutes
                )} minutes ago`;
        }
        return durationElapsed;
    }
}
