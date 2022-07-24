import Entry from "./entry";

export default class MatchUp{
    history:RoundResult[]=[];
    
    pushRoundResult(result:RoundResult){
        this.history.push(result);
    }

    get ready(){
        return this.seatOne!=null && this.seatTwo!=null;
    }

    get winsForSeatOne(){
        return this.history.filter((v,i,a)=>v.winner==this.seatOne).length;
    }
    get winsForSeatTwo(){
        return this.history.filter((v,i,a)=>v.winner==this.seatTwo).length;
    }

    constructor(public seatOne:Entry|null,public seatTwo:Entry|null) {
        
    }

    clear(){
        this.seatOne=null;
        this.seatTwo=null;
    }
}

export interface RoundResult{
    winner:Entry|null,
    loser:Entry|null
}