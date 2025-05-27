function groupBy(items, property) {
    let obj ={}
    const temp =items.map(item=>{
        if(!obj?.[item[property]]){
            obj = {...obj,[item[property]]:item}
        }else{
            obj = {...obj,[item[property]]:[obj[item[property]],item]}
        }
        })
        return obj   
    };

let result1 = groupBy([
   { name: "Apple", type: "fruit" },
   { name: "Broccoli", type: "vegetable" },
   { name: "Banana", type: "fruit" }
], "type");

console.log(result1);
// {
//   fruit: [
//     { name: "Apple", type: "fruit" },
//     { name: "Banana", type: "fruit" }
//   ],
//   vegetable: [
//     { name: "Broccoli", type: "vegetable" }
//   ]
// }