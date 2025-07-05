/*
    small example on how call stack is overflowed
*/

function hi() {
  console.log("name");
  hi();
}

hi();
