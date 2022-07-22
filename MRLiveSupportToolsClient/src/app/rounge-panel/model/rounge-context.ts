export default class RoungeProfile{
    constructor(public name:string,public presenter:string|undefined,public supporter:string|undefined,public note:string,
        public roundCount:number,
        public apiEndpoint:string,
        public entryStart:Date,
        public entryDeadline:Date
        ) {
    }
}