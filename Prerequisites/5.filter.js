let arr = ["apple" , "banana" , "orange" , "watermelon"];
let narr = [];
// need only those fruits whose lenght is above 6
// for(let i = 0 ; i < arr.length ; i++){
//           let fruit = arr[i];
//           if(fruit.length > 6){
//                     narr.push(fruit);
//           }
// }
narr = narr.filter(function(fruit){
          return fruit.length > 6;
})
console.log(arr)
console.log(narr);
