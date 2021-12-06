import type Base from './Base';

type Story = Base & {
    /**
     * In the case of stories or polls, the total comment count.
     * @optional
     */
    descendants?: number;

    /**
     * The story's score, or the votes for a pollopt.
     * @optional
     */
    score?: number;

    /**
     * The title of the story, poll or job
     * @optional
     */
    title?: string;

    /**
     * The URL of the story.
     * default: http://stoplight.io/prism
     * @optional
     */
    url?: string;
};

export default Story;
