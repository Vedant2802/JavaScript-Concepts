// const myArray = ["Akshat", 2, 5, 6, 7];

// console.log(myArray[0]);

// myArray.push(6, 7, 8);

// console.log(myArray);

// myArray.pop();

// console.log(myArray);

// myArray.unshift(9);

// console.log(myArray);

const myArr = [1, 2, 3, 4, 5];

let myArr1 = myArr.slice(0, 2);
console.log("a", myArr);
console.log(myArr1);

let myArr2 = myArr.splice(0, 2);
console.log("b", myArr);
console.log(myArr2);

/*
    a [ 1, 2, 3, 4, 5 ]
    [ 1, 2 ]
    b [ 3, 4, 5 ]
    [ 1, 2 ]
*/
