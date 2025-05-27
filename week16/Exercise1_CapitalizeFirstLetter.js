function capitalizeWords(sentence) {
  const array=sentence.split(" ")
  const string =array.map((value)=>value.split("")[0].toUpperCase() + value.split("").filter((_,index)=>index!==0).join("")).join(" ")
  return string
    
};     

let result1 = capitalizeWords("hello world");
console.log(result1); // "Hello World"
let result2 = capitalizeWords("techup career prep");
console.log(result2); // "Techup Career Prep"