const t1 = 1000;
const t2 = 3000;
const t3 = 5000;

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(`"P1" at ${t1}`);
    // console.log("P1");
  }, t1);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve(`"P2" at ${t2}`);
    reject("p2 failed");
    // console.log("P2");
  }, t2);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(`"P3" at ${t3}`);
    // console.log("P1");
  }, t3);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
