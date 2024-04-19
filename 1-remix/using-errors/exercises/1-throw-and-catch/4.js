// #todo

'use strict';

/*

console.log('- broken JS -');
try {
    turtle = 4;
    let turtle;
} catch (err) {
    console.error(err);
}

console.log('- throw new error -');
try {
    throw __;
} catch (err) {
    console.error(err);

    console.assert(err.name === 'ReferenceError', 'name fail');
    console.assert(
        err.message === "Cannot access 'turtle' before initialization",
        'message fail',
    );
}
*/

console.log('- broken JS -');
try {
    let turtle;
    turtle = 4;
} catch (err) {
    console.error(err);
}

console.log('- throw new error -');
try {
    throw new ReferenceError("Cannot access 'turtle' before initialization");
} catch (err) {
    console.error(err);

    console.assert(err.name === 'ReferenceError', 'name fail');
    console.assert(
        err.message === "Cannot access 'turtle' before initialization",
        'message fail',
    );
}
