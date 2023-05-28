let obj = {
          name : "Vasu" , 
          add : {
                    country : "India",
                    state : {
                              code : "DL" , 
                              pin : "1234"
                    }
          }
}

// let obj2 = obj;
// obj2.name = "abcd";
// // both will display change of name because they point to same address in heap
// console.log(obj);
// console.log(obj2);

// Use of spread operator
// let obj2 = {...obj}; // Shallow Copy
// obj2.name = "abcd";

// // both will display change of name because they point to same address in heap
// obj2.add.country = "Malaysia";

// Use of spread operator
// let obj2 = {...obj , add:{...obj.add}}; 
// obj2.add.country = "Malaysia";

// // both will display change of name because they point to same address in heap
// let obj2 = {...obj , add:{...obj.add,state : {...obj.add.state}}}; /// This is deep copy
// obj2.add.state.code= 10;

// shortcut for deep copy
let obj3 = JSON.parse(JSON.stringify(obj));
obj3.add.state.code = 15;

console.log(obj);
//console.log(obj2);
console.log(obj3);

// shortcut for deep copy
let obj2 = JSON.parse(JSON.stringify(obj));
