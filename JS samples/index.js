// function nameCall() {
//   console.log("akshat");
// }

// setTimeout(nameCall, 5000);

// const cart = ["Pant", "kurta", "shirts"];
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// }); //return use the order details or the order id

// function(){
// proceedToPayment(orderId);
// } //take the id and proceed to payment

// const promise = createOrder(cart);

//{} undefined value

/*
    after sometime it will retreive the data
*/

// the object will be filled with the retreived data automatically {data}

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// GITHUB_API = "http://api.gihub.com/users/vedant2802";

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function (r) {
//   console.log(r);
// });

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

const cart = ["shirts", "pants", "trousers"];

// const promise = createOrder(cart); //return an orderId
// // when i call the .then here , the promise will take 5sec to resolve and return us the order ID ,
// // that order ID will be automatically be passed inside the callback function after we got the data
// promise
//   .then((orderId) => {
//     console.log(orderId);
//   })
//   .catch(function () {
//     console.log("promise has been rejected");
//   });

// we can write in a more concise way like this also , abovw method is also correct
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function () {
    console.log("promise has been rejected");
  })
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => {
    console.log("payment Successful");
  });
//   .catch(function () {
//     console.log("promise has been rejected");
//   });

// Creating the create order function
// producer end
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order
    // validate cart
    // order Id
    if (!validateCart(cart)) {
      const err = new Error("promise has been rejected");
      reject(err);
    }
    // So here basically the data i am getting from the promise is the orderId
    // because i am resolving the promise with the order Id
    const orderId = 12345;
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
      //   resolve(orderId);
    }
  });
  //   console.log(pr);

  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("payment successful");
    }, 2000);
  });
}
