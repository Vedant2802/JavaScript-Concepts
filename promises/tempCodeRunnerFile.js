// we take a new instance of the promise object

// const promise1 = new Promise((resolve, reject) => {
//   // Do an async task here
//   // DN calls , Cryptography

//   setTimeout(function () {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// });

// promise1.then(function () {
//   console.log("promise consumed");
// });

// second Promise

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Akshat");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promise 2 resolved");
// });

// Third Promise

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Akshat", age: 25 });
//   });
// }, 1000);

// promise3.then((data) => {
//   console.log(data);
// });

// Fourth Promise

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // let error = new Error("user is not ther");
//     let error = false;
//     if (!error) {
//       resolve("Api call is successful");
//     } else if (error) {
//       reject("api call failed");
//     }
//   }, 2000);
// });

// promise4
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("the promise is either resolved or rejected finally");
//   });

// Promise 5

// const promise5 = new Promise((resolve, reject) => {
//   let error = true;
//   setTimeout(() => {
//     if (!error) {
//       resolve({ name: "akshat", age: 25 });
//     } else {
//       reject("there is an error");
//     }
//   }, 1000);
// });

// async function promise5execution() {
//   // you do not consume promise like this , promise5() , because it is an object eventually
//   const response = await promise5;
//   console.log(response);
// }

// (async () => {
//   //   const response = await promise5;
//   //   console.log(response);
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// promise5execution();

// Real world example

// (async function githubApiCall() {
//   try {
//     const response = await fetch("https://api.github.com/users/Vedant2802");
//     const data = await response.json();
//     console.log(data);
//     // console.log(response);
//   } catch (error) {
//     console.log("errors found");
//   }
// })();

// const githubApiPromise = fetch("https://api.github.com/users/Vedant2802");
// githubApiPromise
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const githubApiCall = new Promise((resolve, reject) => {
  const response = fetch("https://api.github.com/users/Vedant2802");
  if (response) {
    resolve(response);
    console.log(response);
  } else {
    reject("error getting api response");
  }
});

githubApiCall
  .then((response) => {
    new Promise((resolve, reject) => {
      const mydata = response.json();
      if (mydata) {
        resolve(mydata);
        console.log(mydata);
      } else {
        reject("data not parsed");
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
