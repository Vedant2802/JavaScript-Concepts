// Document Fragment and Range
// Helps in performance improvement , do not repaint the DOM again
// Not part of the main DOM tree , until you insert it inside the DOM
const fragment = document.createDocumentFragment();

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Item${i}`;
  fragment.appendChild(li);
}

document.getElementById("list").appendChild(fragment);

// Range
// If between two boundry points if you want to have a fragment then Range can be used

// Shadow DOM
// Example use cas of Fragments

function addElements(count) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i <= count; i++) {
    const elem = document.createElement("div");
    elem.innerText = `${i}`;
    frag.appendChild(elem);
    // document.body.appendChild(elem);
  }
  document.body.appendChild(frag);
}

addElements(10000);

// Mutation Observer
