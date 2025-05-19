function findMode(arr) {
   const numberInArr = []
   let countNumber = []
   for(let i=0;i<arr.length;i++){
        if(numberInArr.includes(arr[i])){
            countNumber[numberInArr.indexOf(arr[i])] +=1 
        }else{
            numberInArr.push(arr[i]);
            countNumber.push(1)
        }
   }
   let max=-Infinity
   let indexResult =-1
   for (let i=0;i<countNumber.length;i++){
    if(max<countNumber[i]){
        max = countNumber[i]
        indexResult = i
    }
}
   return numberInArr[indexResult]
};

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(result3); // 7