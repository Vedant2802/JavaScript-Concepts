document.querySelector("#grandparent").addEventListener("click", function () {
  console.log("grandparent CLicked");
});

document.querySelector("#parent").addEventListener("click", function () {
  console.log("parent CLicked");
});

document.querySelector("#children").addEventListener("click", function (e) {
  console.log(e);
  console.log("children Clicked");
});
