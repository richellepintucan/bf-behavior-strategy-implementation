// #todo

'use strict';

/*

console.log('- broken JS -');
try {
    turtle = 4;
} catch (err) {
    console.error(err);
}

console.log('- throw new error -');
try {
    throw __;
} catch (err) {
    console.error(err);

    console.assert(err.name === 'ReferenceError', 'name fail');
    console.assert(err.message === 'turtle is not defined', 'message fail');
}

*/

console.log('- broken JS -');
try {
    let turtle = 4; // or use var or const if appropriate
} catch (err) {
    console.error(err);
}

console.log('- throw new error -');
try {
    throw new ReferenceError("turtle is not defined");
} catch (err) {
    console.error(err);

    console.assert(err.name === 'ReferenceError', 'name fail');
    console.assert(err.message === 'turtle is not defined', 'message fail');
}

