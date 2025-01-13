/*
    Browsers are built to understand HTML
*/

/*
    Dom Manupulation
*/

// getElementById()

const title = document.getElementById("main-heading");
console.log("title is", title);

// getElementByClassName()

const listItems = document.getElementsByClassName("list-items");
console.log("list items", listItems);

// getElementbyTagName()

const listItemsTag = document.getElementsByTagName("li");
console.log("list items", listItemsTag);

/*
    Styling Elements
*/

// const title = document.querySelector("#main-heading"); // for selcting the particular Id you use the # keyword
// console.log(title);
// title.style.color = "red";

// const listItems = document.querySelectorAll(".list-items"); //for class you use a "." , keyword
// console.log(listItems);
// // listItems.style.fontSize = "2rem";
// // if you have to style all the elements you have to loop through each of the elements

// for (i = 0; i <= listItems.length; i++) {
//   listItems[i].style.fontSize = "3rem";
// }

/*
     Creating Elements
*/

const ul = document.querySelector("ul");
console.log(ul);
const li = document.createElement("li");
console.log(li);

/*
    Adding Elements
*/

ul.append(li);

/*
    here appendChild() , can be used if you are working with older browsers , but it only accepts a node
    only accepts one node , add to the last node
*/

li.innerText = "Xmen";
console.log(li.innerText);
// Modifying the text

const firstListItem = document.querySelector(".list-items");
console.log(firstListItem);

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

/*
    Modifying Attributes and Classes of an Element
*/

li.setAttribute("id", "main-heading");
li.removeAttribute("id");

// const title = document.querySelector("#main-heading");
console.log(title);

console.log(title.getAttribute("id"));

li.classList.add("list-items");

// Remove elements

li.remove();

// DOM Traversal

/*
     Parent Node Traversal , Traversing from child to parent
*/

// let ul = document.querySelector("ul");
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

/*
    Child Node Traversal
*/

// let ul = document.querySelector("ul");
console.log(ul.childNodes);
console.log(ul.lastChild);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.children);

/* 
    Sibling Node Traversal
*/

// const ul = document.querySelector("ul");
const div = document.querySelector("div");
console.log(div.childNodes);
console.log(div.children); // children only points to the elements , childNodes also takes into consideration like indentation and all that
console.log(ul.previousSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// Event listeners
// Syntax element.addEventListener("click" , function)

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I also love java script");
}

buttonTwo.addEventListener("click", alertBtn);

// // Mouse Hover Event

const box3 = document.querySelector(".box-3");
console.log(box3);
function hoverOn() {
  box3.style.backgroundColor = "black";
}
function hoverOff() {
  box3.style.backgroundColor = ""; // Resets to default
}
box3.addEventListener("mouseover", hoverOn);
box3.addEventListener("mouseout", hoverOff);
box3.removeEventListener("mouseover", hoverOn);

/*
    Event Capturing , Target and Even Bubbling
 */

window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  false
);

window.addEventListener(
  "click",
  function () {
    console.log("document");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    console.log("DIV 2");
  },
  //   false
  { once: true }
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  false
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log((e.target.innerText = "clicked"));
  },
  false
);

/*
    the inside the function looks something like this in the console

        PointerEvent {isTrusted: false, pointerId: 1, width: 1, height: 1, pressure: 0, …}
*/

/*
    by default this boolean value inside addEventListener is false
*/

document.querySelector("#football").addEventListener("click", function (e) {
  console.log("Football Clicked");
  const target = e.target;
  //   console.log(target);
  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

/*
    for doing this for all the list item , you have  write the even listeners for all the li elements , instead
    of that you can use the concept called "Event Delegation"
*/

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is Clicked");
});

// // suppose if we create another element in the same parent

const sports = document.querySelector("#sports");
const chess = document.createElement("li");
chess.innerText = "Chess is good";
chess.setAttribute("id", "chess");
// sports.appendChild(chess);
sports.append(chess);
