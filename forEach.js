const arr = [1, 2, 3];

// arr.forEach(
//   (myname = (element) => {
//     console.log(element);
//   })
// );

// arr.forEach(function (element) {
//   console.log(element);
// });

// const value = () => {};
// console.log(value);

// const myValue = () => {
//   console.log("akshat");
// };

// arr.forEach((index) => {
//   setTimeout(myValue, 4000);
// });

// arr.forEach((i) => {
//   i = i + 10;
//   console.log(i);
// });

// arr.map((i) => {
//   i = i + 10;
//   console.log(i);
// });

const myValue = arr.reduce(function (acc, currValue) {
  console.log(`"acc value is " ${acc} , "curr value is" ${currValue}`);
  return acc + currValue;
}, 0);

console.log(myValue);
