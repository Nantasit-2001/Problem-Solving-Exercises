function reverseString(text) {
    let result =""
    for(let i=text.length-1;i>-1;i--){
        result += text[i]
    }
    return result
};

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"