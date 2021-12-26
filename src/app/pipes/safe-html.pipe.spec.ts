import { SecurityContext } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
  SafeValue,
} from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

class DomSanitizerMock extends DomSanitizer {
  sanitize(
    context: SecurityContext,
    value: string | SafeValue | null
  ): string | null {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustHtml(value: string): SafeHtml {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustStyle(value: string): SafeStyle {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustScript(value: string): SafeScript {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustUrl(value: string): SafeUrl {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl {
    throw new Error('Method not implemented.');
  }
}

describe('SafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeHtmlPipe(new DomSanitizerMock());
    expect(pipe).toBeTruthy();
  });
});
