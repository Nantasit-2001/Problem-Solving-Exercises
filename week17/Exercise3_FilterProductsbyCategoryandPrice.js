function filterProducts(products, targetCategory, targetPrice) {
//    let arr =[]
//     for(let i=0;i<products.length;i++){
//         if(products[i].category===targetCategory && products[i].price <= targetPrice){
//             arr.push(products[i])
//         }
//     }
//     console.log(arr)
    return products.filter(item=>{return item.category===targetCategory && item.price<=targetPrice })


};

let result = filterProducts([
   { name: "Notebook", category: "stationery", price: 50 },
   { name: "Pen", category: "stationery", price: 20 },
   { name: "Shoes", category: "fashion", price: 90 },
   { name: "Bag", category: "fashion", price: 300 },
   { name: "Pencil", category: "stationery", price: 10 }
], "stationery", 30);

console.log(result);
// Expected Output:
// [
//   { name: "Pen", category: "stationery", price: 20 },
//   { name: "Pencil", category: "stationery", price: 10 }
// ]