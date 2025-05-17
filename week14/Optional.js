function isPalindrome(word) {
    let reveseWord = "";
    for(let i=word.length-1;i>-1;i--){
        reveseWord += word[i];
    }
    return (reveseWord === word)?true:false
};

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
