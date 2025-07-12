// Debouncing

// Limit the rate at which a function is executed

// ensures that the function executes only after a certain delay has passed , since the last time it was executed

function debouncedFn(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

// So we basically return a debounced version of the origin function , the debounced version , get called on every event changes , and it will clear the previous timer if the event is triggered before the delay itself , if the event is triggered once the delay has happened then only the actual function call will happen

// Throttling

// It limits how often a function can be called over time

function throttledFn(fn, interval) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// Memoization

// cache the result of an expensive operation and return the cached result when the same input is given in the future

// input => fn() => output

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Cache hit:", key);
      return cache[key];
    } else {
      console.log("cache miss:", key);
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}
