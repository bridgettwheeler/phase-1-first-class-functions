function firstFunction() {
    console.log("I come before the callback function!");
  } 

function receivesAFunction(callback) {
    firstFunction();
    callback();
  } 

  function returnsANamedFunction() {
      let namedFunction = function() {
          console.log("I am a named function!");
      }
      return namedFunction
  }

  function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!");
    }
}