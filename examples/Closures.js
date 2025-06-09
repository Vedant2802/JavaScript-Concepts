function a() {
  let x = 10;
  return function b() {
    console.log(x);
  };
  //   return b;
}

var z = a();
console.log(z);
z();

/*
    So basically even when the function is assigned to a variable and used somewhere else it remembers its lexical scope"
    */

/*
    In java script function can be assigned to variables also */

/*
    So bascially when the function b was returned , actually a closure was returned which held its lexical values */
