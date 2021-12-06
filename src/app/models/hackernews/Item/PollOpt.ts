import type Base from './Base';

type PollOpt = Base & {
    /**
     * The item's parent. For comments, either another comment or the relevant story.
     * For pollopts, the relevant poll.
     * @optional
     */
    parent: number;

    /**
     * The story's score, or the votes for a pollopt.
     * @optional
     */
    score: number;
};

export default PollOpt;
