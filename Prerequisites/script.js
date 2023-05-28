// // Discussion about Browser Environment and Non Strict mode
// // Ek global object banta hai jab ham apna code run krte hai jo hamare pure code ko run krta hai
// // this object refers to current object

// console.log(this); // global object : windows

// // in function this refers to the object through which function is called
// function fn(){
//           console.log(this);
// }
// fn(); // abhi kisi object ke through run nhi kraya isliye iska bhi windows // this points to global object (windows)

// let obj =  {
//           name : "Udai" , 
//           func : fn
// }

// obj.func(); // this here refers to self object : output :-{ name: 'Udai', func: [Function: fn] }

function fn(){
          console.log(this);
          function abc(){
                    console.log(this);
          }
          abc();
}



