import type Story from 'src/app/models/hackernews/Item/Story';

import {
  HeadlineClickDetail,
  NEWS_ITEM_VARIANT_VIII_TAG,
  NewsItemVariantViiiElement,
} from './news-item-variant-viii.element';

describe('NewsItemVariantViiiElement', () => {
  let el: NewsItemVariantViiiElement;

  const query = <T extends Element>(selector: string) =>
    el.shadowRoot!.querySelector<T>(selector);
  const queryAll = <T extends Element>(selector: string) =>
    Array.from(el.shadowRoot!.querySelectorAll<T>(selector));
  const story = (id: number, title: string): Story => ({
    id,
    title,
    type: 'story',
  });

  beforeEach(() => {
    el = document.createElement(
      NEWS_ITEM_VARIANT_VIII_TAG
    ) as NewsItemVariantViiiElement;
    document.body.append(el);
  });

  afterEach(() => {
    el.remove();
  });

  it('should be registered as a custom element with an open shadow root', () => {
    expect(el instanceof NewsItemVariantViiiElement).toBe(true);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('should render the topic and thumbnail', () => {
    el.setAttribute('topic', 'World News');
    el.setAttribute('src', '/assets/images/display3.webp');
    el.setAttribute('alt', 'A crowd at the airport');

    expect(query('.topic')?.textContent).toBe('World News');
    const img = query<HTMLImageElement>('img')!;
    expect(img.getAttribute('src')).toBe('/assets/images/display3.webp');
    expect(img.alt).toBe('A crowd at the airport');
  });

  it('should omit the topic and thumbnail when not provided', () => {
    expect(query('.topic')).toBeNull();
    expect(query('img')).toBeNull();
  });

  it('should render a link per story in order', () => {
    el.firstStory = story(1, 'First headline');
    el.secondStory = story(2, 'Second headline');
    el.thirdStory = story(3, 'Third headline');

    const links = queryAll<HTMLAnchorElement>('a');
    expect(links.length).toBe(3);
    expect(links[0].getAttribute('href')).toBe('/stories/1');
    expect(links[0].textContent).toBe('First headline');
    expect(links[1].getAttribute('href')).toBe('/stories/2');
    expect(links[2].getAttribute('href')).toBe('/stories/3');
  });

  it('should skip stories that are not set', () => {
    el.firstStory = story(1, 'First headline');
    el.secondStory = undefined;
    el.thirdStory = story(3, 'Third headline');

    expect(queryAll('a').map((a) => a.textContent)).toEqual([
      'First headline',
      'Third headline',
    ]);
  });

  it('should render titles as text rather than markup', () => {
    el.firstStory = story(1, '<img src=x onerror=alert(1)>');

    const link = query('a')!;
    expect(link.children.length).toBe(0);
    expect(link.textContent).toBe('<img src=x onerror=alert(1)>');
  });

  it('should re-render when inputs change', () => {
    el.setAttribute('topic', 'World News');
    el.firstStory = story(1, 'Old');

    el.setAttribute('topic', 'Tech');
    el.firstStory = story(2, 'New');

    expect(query('.topic')?.textContent).toBe('Tech');
    expect(queryAll('a').map((a) => a.textContent)).toEqual(['New']);
  });

  it('should dispatch a composed headline-click event on left click', () => {
    el.firstStory = story(42, 'Clickable');
    let detail: HeadlineClickDetail | undefined;
    const listener = (event: Event) =>
      (detail = (event as CustomEvent<HeadlineClickDetail>).detail);
    document.addEventListener('headline-click', listener);

    const click = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    });
    query('a')!.dispatchEvent(click);
    document.removeEventListener('headline-click', listener);

    expect(detail).toEqual({ id: 42 });
    expect(click.defaultPrevented).toBe(true);
  });

  it('should leave modified clicks to the browser', () => {
    el.firstStory = story(42, 'Clickable');
    let fired = false;
    let preventedByElement: boolean | undefined;
    const listener = () => (fired = true);
    // Record whether the element cancelled the click, then cancel it
    // ourselves so the test browser does not actually follow the link.
    const clickGuard = (event: Event) => {
      preventedByElement = event.defaultPrevented;
      event.preventDefault();
    };
    document.addEventListener('headline-click', listener);
    document.addEventListener('click', clickGuard);

    query('a')!.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        composed: true,
        cancelable: true,
        ctrlKey: true,
      })
    );
    document.removeEventListener('headline-click', listener);
    document.removeEventListener('click', clickGuard);

    expect(fired).toBe(false);
    expect(preventedByElement).toBe(false);
  });
});
