Promise.all([]);
/*
    it takes in an array of promises
*/

// If all the promises are resolved it gives an array of values of all the promises.
// If any of the promises is not resolved , it will immediately throw an error
// It will not even wait for the other promises to resolve

Promise.allSettled([]);

/*
    this gives you the reuslt of all the promises even if the
    promises in between fails , it won't immediately throw an error
    it will wait for all the promises to resolve
*/

Promise.race([]);

/*
    This will just give us the value or the error of the first promise that gets resolved or rejected
*/

Promise.any([]);

/*
    This will give you the value of the first promise that gets resolved
    case 1: Suppose if all the p's fails
    Then it will give you an aggregated error
    [e1,e2,e3] like this
*/
