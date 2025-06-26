async function foo() {
  //   return 101;
  return Promise.resolve(101);
}

let value = foo();
console.log(value);

value.then((result) => {
  console.log(result);
});
