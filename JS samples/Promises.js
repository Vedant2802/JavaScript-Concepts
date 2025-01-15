// const cart = ["shirtd", "pants", "trousers"];

// //Async api

// // const promise = createOrder(cart); // gives us order Id
// // // proceedToPayment(orderId);

// // promise.then(function () {
// //   console.log();
// //   // proceedToPayment(orderId);
// // });

// // promise.catch(function (akshat) {
// //   console.log(akshat);
// // });

// // you need to return from each level , so that it will go automatically to the next level
// createOrder(cart)
//   .then(function (first) {
//     console.log(first);
//     return first;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (payment) {
//     console.log(payment);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .then(function (message) {
//     console.log("i will run no matter what");
//   });

// // How to create our own promise
// // Producer end
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }

//     // logic for order id

//     const Id = 12345;
//     if (Id) {
//       setTimeout(function () {
//         resolve(Id);
//       }, 5000);
//     }
//   });

//   return pr;
// }

// function validateCart(cart) {
//   return false;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("payment successful");
//   });
// }
