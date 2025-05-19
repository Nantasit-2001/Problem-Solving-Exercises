function sumEvenNumbers(numbers) {
    const evenNumber = []
    let sum = 0
    for(let i = 0;i<numbers.length;i++){
        (numbers[i]%2===0)?evenNumber.push(numbers[i]):null
    }
        console.log(evenNumber)
    for (let i = 0; i<evenNumber.length ;i++){
        sum += evenNumber[i]
    }
    return sum ;
};

let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1); // 6

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2); // 28