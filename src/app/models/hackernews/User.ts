/**
 * Api model for /user/{user-id}.json endpoint
 */

type User = {
    /**
     * The user's unuque username. Case-sensitive.
     * @required
     */
    id: string;

    /**
     * Delay in minutes between a comment's creationa and its visibility
     * to other users.
     * @optional
     */
    delay?: number;

    /**
     * Creation date of the user, in Unix Time.
     * @required
     */
    created: number;

    /**
     * The user's karma.
     * @required
     */
    karma: number;

    /**
     * The user's optional self-description. HTML.
     * @optional
     */
    about?: string;

    /**
     * List of the user's stories, polls and comments.
     * @optional
     */
    submitted?: Array<number>;
};

export default User;
