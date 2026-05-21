// function one() {
//     console.log("Hello");
// }

// function two(temp) {
//     temp();
//     console.log("World");
// }

// two(one);

// function one() {
//     console.log("Hello");
// }

// function two(callback) {
//     callback();
//     console.log("World");
// }

// two(one);   

// function two(callback) {
//     callback();
//     console.log("World");
// }
// function one() {
//     console.log("Hello");
// }
// two(one);  

// function two(callback) {
//     callback();
//     console.log("World");
// }
// two() {
//     function(){
//          console.log("Hello");
//     }
   
// }
// two(one); 

// function two(callback) {
//     callback();
//     console.log("World1");
// }
// two(
//     ()=>{
//          console.log("Hello");
//     }   
// )


// function two(callback) {
//     callback();
//     console.log("World1");
// }
// two(()=>console.log("Hello"))

// var name = "Ram"
// function one(myName){
//     console.log(myName);
    
// }
// function two(){
//     console.log("world");
    
// }
// one(name);
// two();

// var name = "Ram"
// function one(myName){
//     console.log(myName);
    
// }
// function two(){
//     one(name);
//     console.log("world");   
// }
// two();

// var name = "Ram"
// function one(myName){
//     console.log(myName);
    
// }
// function two(callback){
//     callback(name);
//     console.log("world");   
// }
// two(one);

var name = "Ram"
function one(myName){
    console.log(myName);
    
}
function two(callback,yourName){
    callback(yourName);
    console.log("world");   
}
two(one,name);






