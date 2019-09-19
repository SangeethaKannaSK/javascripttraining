/**
 * 
 * 
 * Async JS
 */

 //Generators
 function *main() {
      var x = yield 4 + 1;
     
 }

 var it = main();

console.log(it.next());
console.log(it.next());
