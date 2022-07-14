export default class Entry{
    get maxWinCount(){
        let max=0;
        this.history.forEach(turn => {
            if(turn.length-1>max){
                max=turn.length;
            }
        });
        return max;
    }

    get totalWinCount(){
        return this.history.flat.length-this.history.length;
    }

    latestTurn:Entry[]=[];
    history:Entry[][]=[[]];

    constructor(public entryName:string,public playerName:string,public playableName:string) {
    }

    newTurn(){
        this.latestTurn=[];
        this.history.push(this.latestTurn);
    }
    onFight(opposite:Entry){
        this.latestTurn.push(opposite);
    }
}