function findCommon(arr1, arr2) {
   let result = []
    for(let i=0;i<=arr1.length;i++){
    if(arr2.includes(arr1[i])){
        result.push(arr1[i]);
    }
   }
   return(result)
};

let result1 = findCommon([1, 2, 3], [2, 3, 4]);
console.log(result1); // [2, 3]

let result2 = findCommon([5, 6], [7, 8]);
console.log(result2); // []