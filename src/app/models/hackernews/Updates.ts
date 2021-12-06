/**
 * Api model for /updates.json endpoint
 */

type Updates = {
    /**
     * List of HN Item IDs.
     * @optional
     */
    items?: Array<number>;

    /**
     * List of users identifiers.
     * @optional
     */
    profiles?: Array<string>;
};

export default Updates;
