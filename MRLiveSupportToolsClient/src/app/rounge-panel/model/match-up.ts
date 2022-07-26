import Entry from "./entry";

export default class MatchUp{
    history:number[]=[];
    updated:Date=new Date();
    winner:Entry|null=null;

    pushRoundResult(result:number){
        this.history.push(result);
        this.updated=new Date();
    }

    get ready(){
        return this.seatOne!=null && this.seatTwo!=null;
    }

    get winsForSeatOne(){
        return this.history.filter((v,i,a)=>v==RoundResult.One).length;
    }
    get winsForSeatTwo(){
        return this.history.filter((v,i,a)=>v==RoundResult.Two).length;
    }

    constructor(public seatOne:Entry|null,public seatTwo:Entry|null) {
        
    }

    clear(){
        this.seatOne=null;
        this.seatTwo=null;
    }
}

export enum RoundResult{
    NotDefined,One,Two,Draw
}