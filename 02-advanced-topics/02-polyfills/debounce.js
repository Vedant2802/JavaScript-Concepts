let counter = 0;
const getData = () => {
  console.log("Fetching Data....", counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return function (args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const debouncedFn = debounce(getData, 300);
