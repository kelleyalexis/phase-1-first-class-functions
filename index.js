const receivesAFunction = callback => console.log(callback());

function returnsANamedFunction() {
    return function namedFunction() {
    }
}

const returnsAnAnonymousFunction = () => () => {}



















/* const { returns } = require("chai-spies");

function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction() {
    const namedFunction = () => {
      console.log("This is a named function");
    }
    return namedFunction;
}  

function returnsAnAnonymousFunction() {
    return function() {"This is an anonymous function";
}
}
const receivesAFunction = (callback) => {
    console.log(callback())
};

const returnsANamedFunction = () => {
    const namedFunction = () => {
    };
    return namedFunction;     
};


const returnsAnAnonymousFunction = () => {
    return function () {
    };
};
*/