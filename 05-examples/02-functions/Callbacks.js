setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

function eventAnalyser() {
  //   let count = 0;
  document.querySelector("#clickMe").addEventListener("click", function xyz() {
    //   console.log("button click");
    let count = 0;
    setTimeout(function timer() {
      console.log("button clicked", ++count);
    }, 1000);
  });
}

eventAnalyser();
