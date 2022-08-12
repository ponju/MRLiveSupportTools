import { Moment } from "moment";

export class EntryLoaderOption {
    constructor(
        public apiEndpoint: string,
        public entryStart: Moment,
        public entryDeadline: Moment
    ) { }
}
