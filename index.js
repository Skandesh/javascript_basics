/*
All JS code executes in an Execution Context, like a container 
which has two segments, one for memory other for code.

Process of execution:
1. Creation phase - memory of variables, functions would be defined
2. Code phase - values for variables, execution of functions would happen
by pushing code into the call stack.

-- Each function will have it's own Execution context (memory & code)
and variables outside function would be defined at the global level. 


In the below example, x is defined at two scopes
-- x = 1 is defined globally
-- x = 10 & x = 100 locally defined inside functions a & b resepectively 

O/P would be:
10
100
1

*/


var x = 1
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}
function b(){ 
    var x = 100;
    console.log(x);
}