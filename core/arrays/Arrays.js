// Arrays can be collection of elements of any type
// index is the position of an element in the array
// index always starts with 0 and ends with the length of the array - 1

let arr = [1, [2, 3], [4, 5, 6], [7]];
let arr2 = [6, 12, 35, 4, 5, 6, 7];

// Methods to add elements into an Array

// push() , return the number of elements currently in the array after inserting the element , it changes and mutates the original array itself

// unshift() , adds an element to the front of the array and returns the current number of elements , this also mutates the original array

// pop() , remove an element from end of array , it mutates the original array , it returns the removed element

// shift() , removes the element from the begining of the array , also mutates the original array

// slice() , returns the copy of a particular portion of an array , do not mutate the original array
// const slicedArray = arr.slice();
// console.log(slicedArray);

// isArray() , validates if it is an Array or not  , returns boolean value

// Destructuring from an Array

// rest parameter(always used with variables) and spread operator

// const [first, second, ...rest] = [...arr2];
// console.log(rest);
// you can clone an array using the spread operator
// const clonedArray = [...arr, ...arr2];
// console.log(clonedArray);

// length property , give the count of total number elements

// console.log(Math.max(...arr.flat(Infinity)));

// Inbuilt array methods

// concat()
// join() , returns the elements of the array with a separator , between them , by default the separator is a ','
// join() calls the toString() , on each element and then return the elements , it might look like it flatten the array but that is not the case
// let joinedArray = arr.join();
// console.log(joinedArray);

// includes() , it determines if an element is present in the array or not , straighforward , for strings it is case sensitive

// indexOf() , returns the index of the first occurrence of an element in an Array , if it is not there the it will return -1

// lastIndexOf() , return the index of last occurrence of the element

// reverse() , as the name suggests , reverses the order of the elements , mutates the original array

// console.log(arr.reverse());
// console.log(arr);

// sort() , converts the elements to a string and then by default sorts them in ascending order

// console.log(arr2.sort((a, b) => a ** 2 - b));
// arr2.sort((a, b) => {
//   return a === b ? 0 : a > b ? 1 : -1;
// });

// console.log(arr2);

// splice() : Multipurpose method a little bit confusing , returns the array of deleted items
// splice(start , deleteCount , item1 , item2 ,item3)
// const value = arr2.splice(0, 1, 98, 99, 100);
// console.log(value);
// console.log(arr2);

// at() , method , helps in getting element using negative index also

// console.log(arr2.at(-1));

// Immutable methods , do not change the source Array
// toReverse() , toSorted() , toSpliced() ,

// Array iteration methods

// filter() , map() , reduce()

// const mapped_data = arr2
//   .map((num) => (num = num * num))
//   .filter((num) => num < 100);

// console.log(mapped_data);

// reduce() method , when you want a single value out of the array after all the computations in that case you will use reduce()

//Syntax = arr.reduce(reducer(accumulator , currentValue), initialValue))
//  the return value of the callback function becomes the new accumulator (acc) value for the next iteration.

// const value = arr2.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(value);

// reduceRoght() , starts the itertion from right to left , instead of left to right , functionality wise same as reduce

// some() if the condition is satidfied for atleast one element in the array then we get true , otherwise we get false , (Always a boolean value)

// example

// const value = arr2.some((item) => item == 5);

// console.log(value);

// every() , returns true , if the condition satisfies the condition for all the elements in an Array

// find() findLast(), return the first value that satisfies the condition , findLast() starts from right to left

// const value = arr2.find((item) => item < 10);
// console.log(value);

// findIndex() , findLastIndex() , findLast()

// forEach() , does not return anything unlike map() ,filter() and reduce()
