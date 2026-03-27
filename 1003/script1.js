let fr = "Harry";
console.log(fr.length);

console.log(fr.toUpperCase());
console.log(fr.toLowerCase());

console.log(fr.slice(2,4));
console.log(fr.slice(4));

console.log(fr.replace("Harr","Perr"));
let friend = "Carry";
console.log(fr.concat(" is a friend of ", friend,  " ok" ));

let sur = "     Shimandi   "
console.log(sur.trim());
console.log(sur);

let etm = "Harry"
console.log(etm[0]);
console.log(etm[4]);

//use a for loop to print a string 
let arr = "Harry"
for(i=0; i<arr.length; i++){
    console.log(arr[i]);
    
}

let frame  = "Shivika" + " "+"Harry"
console.log(frame);

//string practice set
let str = "Har\"";
console.log(str.length);

const word = "fox";
const sentence = " The chemical name is used by scientists, though they refer to the protein simply as  or connectin "
console.log(sentence.includes(word));

console.log(
    `The word "${word}" ${
      sentence.includes(word) ? "is" : "is not"
    } in the sentence`,
  );


//problem no 3
console.log(word.toLowerCase())
console.log(word.toUpperCase())