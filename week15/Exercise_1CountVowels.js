function countVowels(text) {
    const vowels = ["a","e","i","o","u"]
    let count = 0
    text = text.toLowerCase();
   for(let i = 0 ; i<text.length;i++){
    (vowels.includes(text[i])?count+=1:count)
   }
   return count
};

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2