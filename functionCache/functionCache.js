//from CodeWars
/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results.
In this case we want you to create a function wrapper, which takes a function and caches its results depending on 
the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) { /* complex calculation in here */ /*};
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
*/

// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 


function cache(func) {
  var argResults = {}; //held in closure
  //key will be the first argument, 
  //value will be an object of objects, 
  //where key is second arg and value is result
  var theFunction = func; //held in closure
  var depth = 0; //this will keep track of the current depth of the recursion
  var curLocation = argResults;
  var initialArgs;


  var returnFunc = function (){

    if(depth ===0 ){
      initialArgs = arguments;
    }

    if(!curLocation[initialArgs[depth]]){//current location has not been visited
      curLocation[initialArgs[depth]] = {}; //create a new storage for this combo of args
      if (depth === initialArgs.length-1 /*|| initialArgs.length !==0*/){ // need to calculate and return results
        var results = theFunction.apply(this,initialArgs); //calculate results
        curLocation[initialArgs[depth]] = results; //save those results for later
        depth = 0; //reset depth 
        curLocation = argResults; //reset current location
        return results;
      }else if(initialArgs.length ===0){
        return theFunction();
      }else{
        curLocation = curLocation[initialArgs[depth]];
        depth++;
        return returnFunc();
      }      
    }else{//this location has been visited
      if (depth === initialArgs.length-1 ){
        var results = curLocation[initialArgs[depth]];
        depth =0;
        curLocation = argResults;
        return results; 
      }else{
        curLocation = curLocation[initialArgs[depth]];
        depth++;
        return returnFunc();
      } 
    } 
  };
  return returnFunc;
}