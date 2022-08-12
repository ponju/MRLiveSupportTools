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

    constructor(public seatOne:Entry|undefined,public seatTwo:Entry|undefined) {
        
    }

    clear(){
        this.seatOne=undefined;
        this.seatTwo=undefined;
    }
}

export enum RoundResult{
    NotDefined,One,Two,Draw
}