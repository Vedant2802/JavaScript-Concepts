// console.log("App loaded");

//Dom Manupulation

// getElementById()

// const title = document.getElementById("main-heading");
// console.log("title is", title);

// // getElementByClassName()

// const listItems = document.getElementsByClassName("list-items");
// console.log("list items", listItems);

// // getElementbyTagName()

// const listItemsTag = document.getElementsByTagName("li");
// console.log("list items", listItemsTag);

//Styling Elements

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

// Creating Elements

// const ul = document.querySelector("ul");
// console.log(ul);
// const li = document.createElement("li");
// console.log(li);

//Adding Elements

// ul.append(li);
// li.innerText = "Xmen";
// console.log(li.innerText);
// Modifying the text

// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem);

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

//Modifying Attributes and Classes of an Element

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// const title = document.querySelector("#main-heading");
// console.log(title);

// console.log(title.getAttribute("id"));

// li.classList.add("list-items");

// Remove elements

// li.remove();

// DOM Traversal

// Parent Node Traversal , Traversing from child to parent

// let ul = document.querySelector("ul");
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// Child Node Traversal

// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ul.lastChild);
// console.log(ul.firstChild);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.children);

// Sibling Node Traversal

// const ul = document.querySelector("ul");
// const div = document.querySelector("div");
// console.log(div.childNodes);
// console.log(div.children); // children only points to the elements , childNodes also takes into consideration like indentation and all that
// console.log(ul.previousSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// Event listeners
// Syntax element.addEventListener("click" , function)

// const buttonTwo = document.querySelector(".btn-2");

// function alertBtn() {
//   alert("I also love java script");
// }

// buttonTwo.addEventListener("click", alertBtn);

// // Mouse Hover Event

// const box3 = document.querySelector(".box-3");
// console.log(box3);
// function hoverOn() {
//   box3.style.backgroundColor = "black";
// }
// function hoverOff() {
//   box3.style.backgroundColor = ""; // Resets to default
// }
// box3.addEventListener("mouseover", hoverOn);
// box3.addEventListener("mouseout", hoverOff);
// box3.removeEventListener("mouseover", hoverOn);

// window.addEventListener(
//   "click",
//   function () {
//     console.log("window");
//   },
//   true
// );

// window.addEventListener(
//   "click",
//   function () {
//     console.log("document");
//   },
//   true
// );

// document.querySelector(".div2").addEventListener(
//   "click",
//   function () {
//     console.log("DIV 2");
//   },
//   true
// );

// document.querySelector(".div1").addEventListener(
//   "click",
//   function () {
//     console.log("DIV 1");
//   },
//   true
// );

// document.querySelector("button").addEventListener(
//   "click",
//   function (e) {
//     console.log(e);
//   },
//   true
// );
