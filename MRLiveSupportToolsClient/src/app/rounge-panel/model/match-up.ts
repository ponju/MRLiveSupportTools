import Entry from "./entry";

export default class MatchUp{
    history:RoundResult[]=[];
    
    pushRoundResult(result:RoundResult){
        this.history.push(result);
    }
    get winsForSeatOne(){
        return this.history.filter((v,i,a)=>v==RoundResult.SeatOne).length;
    }
    get winsForSeatTwo(){
        return this.history.filter((v,i,a)=>v==RoundResult.SeatTwo).length;
    }

    constructor(public seatOne:Entry|null,public seatTwo:Entry|null) {
        
    }
}

export enum RoundResult{
    SeatOne,
    SeatTwo,
    Draw
}