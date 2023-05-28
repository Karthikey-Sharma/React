// Destructuring is convinient way of extracting properties from an array or an object 
let arr = ["hi" , "I" , "am" , "Udai"];
console.log(arr);
// let [a , b , c , d] = arr; /// destructuring
// console.log(a , b, c , d);
// let [a , b , , d] = arr; // if i don't need c
// console.log(a , b ,d);
// let [a , b , , d , extra = "hello"] = arr; // if i don't need c // extra if not defined will print undefined
// console.log(a , b ,d , extra);


// Now destructuring in objects

// let obj = {
//           name : "Udai",
//           state : "Delhi" , 
//           country : "India"
// };
// let name = obj.name;
// let state = obj['state'];
// Now doing destructuring in objects
// let {name : firstName ,  state , country , extra = "default Value"} = obj;
// console.log(firstName , state , extra );

// now in nested objects

let obj = {
          name : "Udai",
          add : {
                    country : "India",
                    state : {
                              code : "DL" , 
                              pin : "222"
                    }
          }

}


// variations
let {name} = obj;
let{add:{country : abcd}} = obj;
let {add:{state:{code : cd}}} = obj;
console.log(name);
console.log(abcd);
console.log(cd);
