class Player{
    name: string;
    jersey: number;
    constructor(name: string, jersey:number){
        this.name = name;
        this.jersey = jersey;
    }
}

let jeseekia: Player = new Player("Jeseekia", 4);
console.log(jeseekia.name);