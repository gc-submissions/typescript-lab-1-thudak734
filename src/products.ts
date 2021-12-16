export interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {name: "Apples", price: 2.99},
    {name: "Peaches", price: 3.99},
    {name: "Pears" , price: 2.89},
];

export function calcAverageProductPrice(products:Product[]): number{
    //SUM THE ARRAY
    let sum: number =0;
    for (let i=0; i<products.length; i++){
        sum += products[i].price;
    }
    
    //what if passed empty array?
    if(products.length === 0){
        return 0;
    }
    //AVG = SUM / LENGTH
       return sum / products.length; // probably fails on empty array
     }

     let averagePrice: number = calcAverageProductPrice(products);
     console.log(averagePrice);
     //what if passed empty array?
     let emptyProducts: Product[] = [];
     console.log(calcAverageProductPrice(emptyProducts));