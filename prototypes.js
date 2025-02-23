// function adder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add2 = adder(2);
// this add2 is basically a reference to the anonymous function that we are are returning from the adder function
// everytime i invoke the function adder a new lexicaly scope is created with the passed argument
// const add8 = adder(8);
// console.log(add2(5));
// console.log(add8(8));

// So basically closures are functions along with its lexical scope forms a closure

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [5, 6, 7, 8, 8, 9];
// let arr3 = [...arr, ...arr2];
// console.log(arr);
// // const splicedArray = arr.splice(1, 4);
// const shiftArray = arr3.shift();
// // console.log(splicedArray);
// console.log(shiftArray);
// console.log(arr);
// console.log(arr3);

function foodCost(name, price) {
  this.name = name;
  this.price = price;
}

foodCost.prototype.incrementPrice = function increment() {
  this.price++;
  console.log(this.price++);
};

//this keyword inside arrow functions does not work , this code give the value as Nan
// foodCost.prototype.incrementPrice = () => {
//   this.price++;
//   console.log(this.price++);
// };

console.log(foodCost.prototype.incrementPrice);

const updatedprice = new foodCost("aksaht", 400);
updatedprice.incrementPrice();
