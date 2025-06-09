// document.querySelector("#grandparent").addEventListener("click", function () {
//   console.log("grandparent CLicked");
// });

// document.querySelector("#parent").addEventListener("click", function () {
//   console.log("parent CLicked");
// });

// document.querySelector("#children").addEventListener("click", function (e) {
//   console.log(e);
//   console.log("children Clicked");
// });

// function alert() {
//   console.log("hello");
// }

// setTimeout(() => {
//   // function alert() {
//   //   window.alert("hello");
//   // }
//   alert();
// }, 5000);

// Dom Content Loaded , an event on the root node that is the document

// document.addEventListener("DOMContentLoaded", async () => {
//   setTimeout(() => {
//     console.log("DOM Content has loaded");
//   }, 5000);
// });

// const btn = document.getElementById("btn");
// btn.innerHTML = "Button";
// btn.style.cursor = "pointer";
// btn.addEventListener("click", () => {
//   console.log("This is the button element");
// });

// What is there inside an event Object

/*
  🧠 Important Concept: The Event object is created at dispatch time, not when addEventListener is called.
  No event object is stored or attached before the actual event occurs.

  The element doesn’t carry around any special “event object prototype” — it’s just a passive participant until the event happens.

  When an event (like a click, keypress, etc.) is triggered, the browser automatically creates an Event object and passes it as the first argument to your event listener callback.

*/

// const input = document.getElementById("input");
// input.addEventListener("keydown", (e) => {
//   console.log(e);
// });

/*
  Event Bubbling , Event Capturing , Event Delegations
*/

// this is how bubbling works
// The event bubbles up to the parent->Grandparent->Body->Document

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// grandparent.addEventListener("click", (e) => {
//   console.log("grandparent");
// });

// parent.addEventListener("click", (e) => {
//   console.log("parent");
// });

// child.addEventListener("click", (e) => {
//   console.log("child");
//   console.log(e);
// });

// document.body.addEventListener("click", (e) => {
//   console.log("body clicked");
// });

// document.addEventListener("click", (e) => {
//   console.log("document reached");
// });

// Capturing works opposite to this
// the event trickles down from GP->Parent->child

// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("parent");
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child");
//     console.log(e);
//   },
//   true
// );

// document.body.addEventListener(
//   "click",
//   (e) => {
//     console.log("body clicked");
//   },
//   true
// );

// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("document reached");
//   },
//   true
// );

// Event Delegation -> add a single listener to a parent element , instead of adding individual listeners
// Diff between target and current target (target is the element on which the event was fired) and (currentTarget is the parent or element on which the event listener is attached to)

const itemList = document.getElementById("itemlist");
const items = itemList.children;
// console.log(items);

itemList.addEventListener("click", (event) => {
  // Array.from(items)
  //   .filter((item) => item.innerText.includes("Shanky"))
  //   .map((item) => item.innerText.toUpperCase())
  //   .forEach((text) => console.log(text));

  // [...items].forEach((item) => {
  //   // console.log(e.target);
  //   console.log(item.innerText);
  // });
  event.target.closest("li")
    ? console.log(`you clicked on ${event.target.innerText}`)
    : "";
  // console.log(event.currentTarget);
  // console.log(e);
});
