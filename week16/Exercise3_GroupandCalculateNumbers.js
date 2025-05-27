function groupAndCalculate(numbers) {
  let even = 1;
  let odd = 0;
  let zero = 0
  for(let i =0 ;i<numbers.length;i++){
    if(numbers[i]===0){zero += 1}
    else if(numbers[i]%2===0){even *= numbers[i]}
    else odd = odd +=numbers[i]
  }
  return {"even":even, "odd": odd, "zero":zero}
};

let result1 = groupAndCalculate([0, 2, 3, 0, 4, 5]);
console.log(result1); // { even: 8, odd: 8, zero: 2 }

let result2 = groupAndCalculate([0, 0, 1, 3, 5]);
console.log(result2); // { even: 1, odd: 9, zero: 2 }

let result3 = groupAndCalculate([2, 4, 6]);
console.log(result3); // { even: 48, odd: 0, zero: 0 }