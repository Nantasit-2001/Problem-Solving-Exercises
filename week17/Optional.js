function findLongestWord(text) {
const arr =text.split(" ")
let maxLength = 0
let result =""
for(let i =0 ;i<arr.length;i++){
    if(arr[i].length>maxLength){
        maxLength = arr[i].length
        result = arr[i]
    }
}
return result
};

let result1 = findLongestWord("I love programming very much");
console.log(result1); // "programming"

let result2 = findLongestWord("TechUp helps people switch careers");
console.log(result2); // "careers"