//From CodeWars
//http://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
/*
 * Write a program that will calculate the number of trailing zeros in a factorial of a given number.

   N! = 1 * 2 * 3 * 4 ... N

 zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600 
 that has 2 trailing zeros 4790016(00)
 Be careful 1000! has length of 2568 digital numbers.
 */
/*
  Test.assertEquals(zeros(12), 2)
      Test.assertEquals(zeros(3), 0)
*/
function zeros (n) {
 var i = 1;
 var answer = 0;
 while(n>=i){
   i*=5;
   answer += Math.floor(n/i);
 }
 return answer;
}
