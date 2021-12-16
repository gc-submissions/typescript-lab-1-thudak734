export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341}, 
    { name: "Everest", height: 29029}, 
    { name: "Denali", height: 20310}
];



export function findNameOfTallestMountain(mountains: Mountain[]): string {
    //NEED INDEX OF THE TALLEST MOUNTAIN -----   --- - ---
    let tallestMountainIndex: number = 0;
    let tallestMountainHeight: number = 0;
        //LOOK AT EACH MOUNTAIN
    for(let i=0; i<mountains.length; i++){
        
        //IF MOUNTAIN HEIGHT > TALLESTMOUNTAINHEIGHT
        if(mountains[i].height > tallestMountainHeight){ //TAKE THE NEW MOUNTAIN HEIGHT AS TALLEST
    //RETURN NAME OF THE TALLEST MOUNTAIN
                tallestMountainIndex = i;
                tallestMountainHeight = mountains[i].height;
        }
        
    }
return mountains[tallestMountainIndex].name;

}
let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);


    // for (let i = 0; i < mountainObjects.length; i++) {
    //     if (mountainObjects[i].height > mountainObjects[i + 1].height) {
    //         var answer = mountainObjects[i].height;
    //     } else {
    //         var answer = mountainObjects[i + 1].height;
    //     }
    //     if (answer > mountainObjects[i + 2].height) {
    //         answer = answer;
    //     } else {
    //         answer = mountainObjects[i + 2].height;
    //     }
    //     mountainObjects.filter(height.answer);
  