/**
 * Base api model for /item/{item-id}.json endpoint
 */

type Base = {
    /**
     * The item's unique id.
     * @required
     */
    id: number;

    /**
     * `true` if the item is deleted.
     * @optional
     */
    deleted?: boolean;

    /**
     * The type of item. One of "job", "story", "comment", "poll", or "pollopt".I
     * Allowed Values: job, story, comment, poll, pollopt.
     * @required
     */
    type: string;

    /**
     * The username of the item's author.
     * @optional
     */
    by?: string;

    /**
     * Creation date of the item, in Unix Time.
     * @optional
     */
    time?: number;

    /**
     * `true` if the item is dead.
     * @optional
     */
    dead?: boolean;

    /**
     * The ids of the item's comments, in ranked display order.
     * @optional
     */
    kids?: Array<number>;
};

export default Base;
