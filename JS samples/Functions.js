const one = (cb, number) => {
  let numberOfCalls = 0;
  const intervalId = setInterval(() => {
    cb();
    numberOfCalls += 1;

    if (numberOfCalls < 10) {
      console.log("okay");
    } else {
      clearInterval(intervalId);
    }
  }, number);
};

const callback = () => {
  console.log("Akshat Vedant");
};

one(callback, 1000);
