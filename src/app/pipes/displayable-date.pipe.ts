import { Pipe, PipeTransform } from '@angular/core';
import { elapsed as _elapsed, Time } from '../utils/date';

@Pipe({
    name: 'displayableDate',
})
export class DisplayableDatePipe implements PipeTransform {
    transform(value: Date, elapsed: boolean = false): string {
        let displayableDate: string;

        const unixInSeconds: number = value.getTime() / 1000;

        switch (true) {
            case _elapsed(unixInSeconds, Time.Days) > 0:
                displayableDate = `${_elapsed(
                    unixInSeconds,
                    Time.Days
                )} days ago`;
                break;
            case _elapsed(unixInSeconds, Time.Hours) > 0:
                displayableDate = `${_elapsed(
                    unixInSeconds,
                    Time.Hours
                )} hours ago`;
                break;
            default:
                displayableDate = `${_elapsed(
                    unixInSeconds,
                    Time.Minutes
                )} minutes ago`;
        }
        return displayableDate;
    }
}
