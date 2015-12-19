//problem from CodeWars
/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples: 
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false 
validParentheses( "(" ) => returns false 
validParentheses( "(())((()())())" ) => returns true 

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'
*/

//test cases
/*
Test.assertEquals(validParentheses( "()" ), true);
Test.assertEquals(validParentheses( "())" ), false);
Test.assertEquals(validParentheses( "()" ), true);
Test.assertEquals(validParentheses( ")(()))" ), false);
Test.assertEquals(validParentheses( "(" ), false);
Test.assertEquals(validParentheses( "(())((()())())" ), true );
*/

function validParentheses(parens){
  var open = 0;
  for( var x = 0; x < parens.length; x++ ){
    console.log("open:",open);
    if(parens.charAt(x)==="("){ 
      open++; 
    }else if(parens.charAt(x)===")"){
      open--;
    }else {//character isn't a parenthese
    }
    if(open < 0 ){
      return false;
    }
  }
  if(open !== 0 ){
    return false;
  }else{
    return true;
  }
}
