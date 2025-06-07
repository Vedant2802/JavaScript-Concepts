const arr = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8];

const new_set = new Set();
console.log(new_set);
// console.log(new_set.size);

arr.map((item) => {
  new_set.add(item);
  return new_set;
});

console.log(new_set.size);

let new_Array = new Array();
// let new_array = Array.from(new_set);

// console.log(new_array);

for (let item of new_set) {
  new_Array.push(item);
  //   console.log(new_Array);
  return new_Array;
}

console.log(new_Array);
