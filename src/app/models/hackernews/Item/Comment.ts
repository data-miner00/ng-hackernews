import type Base from './Base';

type Comment = Base & {
    /**
     * The item's parent. For comments, either another comment or the relevant story.
     * For pollopts, the relevant poll.
     * @optional
     */
    parent?: number;

    /**
     * The comment, story or poll text. HTML.
     * @optional
     */
    text?: string;
};

export default Comment;
