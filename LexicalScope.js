function a() {
  //   var a = 10;
  c();
  function c() {
    b();
    function b() {
      console.log(x);
    }
  }
}
var x = 20;
a();
console.log(a);

// Whenever an Execution Context is created you also get access to the lexical environmen of the parent.
