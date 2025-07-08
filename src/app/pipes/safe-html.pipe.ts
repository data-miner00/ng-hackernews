import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'safeHtml',
    standalone: false
})
export class SafeHtmlPipe implements PipeTransform {
    public constructor(private sanitized: DomSanitizer) {}

    public transform(value: string): SafeHtml {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
