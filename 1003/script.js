
// for(let b of "Harry"){
//     console.log(b); 
// }

// let n,i=0;
// let a = prompt("Enter the value of n");
// n = Number.parseInt(a);
// while(i<n){
//     console.log(i);
//     i++;  
// }

// let a = prompt("Enter the value of n");
// n = Number.parseInt(a);
// let i = 10;
// do{
//     console.log(i);
//     i++;  

// }while(i<n);

// function onePlusAvg(x,y){
//     return 1+(x+y)/2;
// }
// let a = 1;
// let b = 2;
// let c = 3;

// console.log("One Plus Average of a and b is",onePlusAvg(a,b));

// console.log("One Plus Average of b and c is",onePlusAvg(b,c));

// console.log("One Plus Average of b and c is",onePlusAvg(a,c));

// function onePlusAvg(x,y){
//     return Math.round(1+(x+y)/2);
// }
// let a = 1;
// let b = 2;
// let c = 3;

// console.log("One Plus Average of a and b is",onePlusAvg(a,b));

// console.log("One Plus Average of b and c is",onePlusAvg(b,c));

// console.log("One Plus Average of b and c is",onePlusAvg(a,c));

// const hello = () =>{
//     console.log("How are you?.I am toh fine yaar");
//     return "hi"  
// }
// function onePlusAvg(x,y){
//     return 1+(x+y)/2
// }
// const sum = (p,q) =>{
//     return p+q;
// }

// let a = 1;
// let b = 2;
// let c = 3;

// console.log("One Plus Average of a and b is",onePlusAvg(a,b));
//  console.log("One Plus Average of b and c is",onePlusAvg(b,c));
//  console.log("One Plus Average of b and c is",onePlusAvg(a,c));

//  console.log(sum(9,7))

//reverse a string

let str = "Hello";
let reverse = "";
for(let i = str.length-1; i>=0; i--){
    reverse += str[i];
}
console.log(reverse);
