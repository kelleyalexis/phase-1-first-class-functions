const { returns } = require("chai-spies");

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
