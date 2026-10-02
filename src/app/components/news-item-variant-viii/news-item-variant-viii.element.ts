import Story from 'src/app/models/hackernews/Item/Story';

export const NEWS_ITEM_VARIANT_VIII_TAG = 'app-news-item-variant-viii';

const DEFAULT_ARIA_LABEL = 'News Headlines';

export interface HeadlineClickDetail {
    id: number;
}

const styles = `
    :host {
        display: block;
        color: var(--card-text-color, #111827);
    }

    :host([hidden]) {
        display: none;
    }

    .topic {
        margin: 0 0 0.375rem;
        font-family: var(--card-topic-font, 'Readex Pro', sans-serif);
        font-size: 14px;
        font-weight: 700;
    }

    .thumbnail {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        margin-bottom: 0.75rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-family: var(--card-headline-font, 'Playfair Display', serif);
        font-size: 1.05rem;
        line-height: 1.25;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export class NewsItemVariantViiiElement extends HTMLElement {
    static observedAttributes = ['topic', 'src', 'alt'];

    private readonly internals: ElementInternals;

    private _story?: Story;

    private _story2?: Story;

    private _story3?: Story;

    constructor() {
        super();
        this.internals = this.attachInternals();
        this.internals.role = 'region';
        this.internals.ariaLabel = DEFAULT_ARIA_LABEL;

        this.attachShadow({ mode: 'open' }); // open or close ?!
        this.render();
    }

    get story(): Story | undefined {
        return this._story;
    }

    set story(value: Story | undefined) {
        this._story = value;
        this.render();
    }

    get story2(): Story | undefined {
        return this._story2;
    }

    set story2(value: Story | undefined) {
        this._story2 = value;
        this.render();
    }

    get story3(): Story | undefined {
        return this._story3;
    }

    set story3(value: Story | undefined) {
        this._story3 = value;
        this.render();
    }

    // Attributes are applied after construction (e.g. by Angular's renderer),
    // so the topic-derived label has to be kept in sync here rather than read
    // once in the constructor.
    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ): void {
        if (oldValue === newValue) {
            return;
        }

        if (name === 'topic') {
            this.internals.ariaLabel = newValue || DEFAULT_ARIA_LABEL;
        }

        this.render();
    }

    private render(): void {
        const root = this.shadowRoot!;

        const style = document.createElement('style');
        style.textContent = styles;

        const card = document.createElement('article');
        card.setAttribute('part', 'card');

        const topic = this.getAttribute('topic');
        if (topic) {
            const heading = document.createElement('h3');
            heading.className = 'topic';
            heading.setAttribute('part', 'topic');
            heading.textContent = topic;
            card.append(heading);
        }

        const src = this.getAttribute('src');
        if (src) {
            const img = document.createElement('img');
            img.className = 'thumbnail';
            img.setAttribute('part', 'thumbnail');
            img.src = src;
            img.alt = this.getAttribute('alt') ?? '';
            img.loading = 'lazy';
            card.append(img);
        }

        const list = document.createElement('ul');
        const stories = [this._story, this._story2, this._story3];
        for (const story of stories) {
            if (!story) {
                continue;
            }

            const item = document.createElement('li');
            const link = document.createElement('a');
            link.setAttribute('part', 'headline');
            link.href = `/stories/${story.id}`;
            link.textContent = story.title ?? '';
            link.addEventListener('click', (event) =>
                this.onHeadlineClick(event, story.id)
            );
            item.append(link);
            list.append(item);
        }
        card.append(list);

        root.replaceChildren(style, card);
    }

    private onHeadlineClick(event: MouseEvent, id: number): void {
        if (
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        event.preventDefault();
        this.dispatchEvent(
            new CustomEvent<HeadlineClickDetail>('headline-click', {
                detail: { id },
                bubbles: true,
                composed: true,
            })
        );
    }
}

if (!customElements.get(NEWS_ITEM_VARIANT_VIII_TAG)) {
    customElements.define(
        NEWS_ITEM_VARIANT_VIII_TAG,
        NewsItemVariantViiiElement
    );
}
