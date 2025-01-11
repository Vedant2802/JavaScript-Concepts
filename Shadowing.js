// var a = 10;
// {
//   var a = 90;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);

/*
    The var a = 90 shadows the var a = 10 , because it was not block scoped , and it modifies its value at the global level
*/

// const a = 10;
// {
//   const a = 90;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);

const a = 10;
function x() {
  const a = 20;
  console.log(a);
}
x();
console.log(a);
