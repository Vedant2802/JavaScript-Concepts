// // const p = new Promise((resolve, reject) => {
// //   resolve("Akshat Vedant");
// // });

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Akshat Vedant");
//   }, 10000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Akshat Vedant");
//   }, 20000);
// });

// // function getData() {
// //   // here JS engine will not wait for the promise to be resolved
// //   p.then((res) => console.log(res));
// //   console.log("Namaste Javascript");
// // }

// // const data = getData();
// // console.log(data);

// // data.then((res) => console.log(res));

// async function handlePromise() {
//   // const value = await p;
//   // await p;

//   /*
//     JS Engine was waiting for the promise to be resolved
//   */
//   console.log("Hello Javascript");
//   const val = await p;
//   console.log("namaste javascript");
//   console.log(val);
//   const val1 = await p2;
//   console.log("Hi Akshat");
//   console.log(val1);
//   //   console.log(
//   //     p.then((res) => {
//   //       console.log(res);
//   //     })
//   //   );
// }

// handlePromise();

API = "http://api.github.com/usersfdsf/vedant2efwfewf802";

async function getData() {
  // fetch gives us a promise response which has a body which has readable streams
  try {
    const data = await fetch(API);
    // console.log(data);

    // to convert that readable stream to json , we use json() , which again gives us a promise

    const jsondata = await data.json();
    // console.log(jsondata);
  } catch {
    console.log("bad gateway");
  }
  // if you want to do it using only fetch you can do something like
  //   fetch(API)
  //     .then((res) => {
  //       console.log(res);
  //       return res;
  //     })
  //     .then((result) => {
  //       //   result.json();
  //       return result.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     });
}

// getData();

// for error handling we can also use something like this
getData().catch((err) => console.log(err));
