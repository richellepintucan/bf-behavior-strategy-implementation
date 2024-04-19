// #todo

'use strict';
/*
console.log('- broken JS -');
try {
    null();
} catch (err) {
    console.error(err);
}

console.log('- throw new error -');
try {
    throw __;
} catch (err) {
    console.error(err);

    console.assert(err.name === 'TypeError', 'name fail');
    console.assert(err.message === 'null is not a function', 'message fail');
}
*/

console.log('- broken JS -');
try {
    null(); // Trying to call null as a function
} catch (err) {
    console.error(err); // This will not be reached due to the TypeError thrown above
}

console.log('- throw new error -');
try {
    throw new Error('Custom error message'); // Correctly throwing a new Error object
} catch (err) {
    console.error(err); // Logging the error

    // Assertions about the error object
    console.assert(err.name === 'Error', 'name fail');
    console.assert(err.message === 'Custom error message', 'message fail');
}

