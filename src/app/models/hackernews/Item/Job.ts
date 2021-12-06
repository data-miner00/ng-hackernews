import type Base from './Base';

type Job = Base & {
    /**
     * The comment, story or poll text, HTML.
     * @optional
     */
    text: string;

    /**
     * The URL of the story.
     * @optional
     */
    url: string;

    /**
     * The title of the story, poll or job.
     * @optional
     */
    title: string;
};

export default Job;
