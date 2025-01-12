var a = 10;
{
  var a = 90;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);

/*
    The var a = 90 shadows the var a = 10 , because it was not block scoped , and it modifies its value at the global level , var is not block scoped
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

// const a = 10; // a is created in the global scope
// function x() {
//   const a = 20; //a is created in the local scope
//   console.log(a);
// }
// x();
// console.log(a);
