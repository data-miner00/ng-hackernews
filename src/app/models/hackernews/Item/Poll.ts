import type Base from './Base';

type Poll = Base & {
    /**
     * A list of related pollopts, in display order.
     * @optional
     */
    parts?: Array<number>;

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
     * The title of the story, poll or job.
     * @optional
     */
    title?: string;

    /**
     * The comment, story or poll text. HTML.
     * @optional
     */
    text?: string;
};

export default Poll;
