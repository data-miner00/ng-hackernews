import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

class MockDomSanitizer extends DomSanitizer {
  public constructor(private mockValue: string) {
    super();
  }

  sanitize(): string {
    return this.mockValue;
  }
  bypassSecurityTrustHtml(): string {
    return this.mockValue;
  }
  bypassSecurityTrustStyle(): string {
    return this.mockValue;
  }
  bypassSecurityTrustScript(): string {
    return this.mockValue;
  }
  bypassSecurityTrustUrl(): string {
    return this.mockValue;
  }
  bypassSecurityTrustResourceUrl(): string {
    return this.mockValue;
  }
}

describe('SafeHtmlPipe', () => {
  let safePipe: SafeHtmlPipe;
  let mockValue = 'ANY';

  beforeEach(() => {
    safePipe = new SafeHtmlPipe(new MockDomSanitizer(mockValue));
  });

  it('create an instance', () => {
    expect(safePipe).toBeTruthy();
  });

  it('should return HTML string', () => {
    expect(safePipe.transform('html')).toBeTruthy();
    expect(safePipe.transform('style')).toBeTruthy();
    expect(safePipe.transform('script')).toBeTruthy();
    expect(safePipe.transform('url')).toBeTruthy();
    expect(safePipe.transform('resourceUrl')).toBeTruthy();
    expect(safePipe.transform('anything')).toContain('ANY');
  });
});
