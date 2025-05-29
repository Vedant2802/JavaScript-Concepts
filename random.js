// function myname() {
//   console.log("Akshat");
// }

// function your_name() {
//   console.log("Vedant");
// }

// console.log("Akshat Vedant");

function testTimeout() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

testTimeout();
