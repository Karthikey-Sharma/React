let arr = [1 , 2 , 3 , 4];
let narr = [];
// for(let i = 0 ; i < arr.length ; i++){
//           narr[i] = arr[i] * 2;
// }

// Now using Map function
narr = arr.map((value , idx)=>{
          //console.log(value , idx);
          return value * 2; // return krne se store ho gya hai narr mein
});


console.log(arr);
console.log(narr);