// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 


function speak(name){
   return "Hello " + name;
}

Function.prototype.wrap = 

speak = speak.wrap(function(original, yourName, myName){
   greeting = original(yourName);
   return greeting + ", my name is " + myName;
});

var greeting = speak("Mary", "Kate");


// extend the Function object to include a wrap instance method
