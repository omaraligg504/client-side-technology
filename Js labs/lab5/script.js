



// 1. Predict (in comments) the output order of this code, then run to verify.
   // console.log(a());
   // var b = function(){ return 'B'; };
   // function a(){ return 'A'; }
   // console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.
//predict that the  console will be A and b  because the functions are hoisted so you can use it anywhere and the b is called after declaration
// fucntions are hoisted with the its body so can use it anywhere but var are hoisted but not with its value so it will be undefined 







// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
// function sum(a,b){
//    return a+b
// }
// console.log(sum(5,6));
// let sume=function(a,b){
//    return a+b;
// }
// console.log(sume(5,6));
// 11
// 11





// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
// var factorial=function fact(n){
//    return !n?1:n*factorial(n-1)
// }
// console.log(factorial(5));//will print 120
// console.log(fact(5))//will throw refernce error 











// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
// function showInfo(){
//    console.log(arguments.length);
//    for (let index = 0; index < arguments.length; index++) {
//       console.log( arguments[index])
      
//    }
// }

// showInfo();
// showInfo(2,5)
// showInfo(3,4,5,6,3)





// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
// function mutate(x,y){
//    console.log(arguments[0],arguments[1]);
//    x=2
//    y=3
//    console.log(arguments[0],arguments[1]);
// }
// mutate(4,6)
//4 6
//2 3





// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
// function sumAll(){
//    let sum=0;
//    for (let index = 0; index < arguments.length; index++) {
//       if(typeof arguments[index]=="number")
//       sum+= arguments[index];
   
//    }
//    return sum
// }
// console.log(sumAll(3,4,5,6,"asdkask",1));
//19 true





// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.

// function sumAll(){
//    let arr=[]
//    for (let index = 0; index < arguments.length; index++) {
//       if(typeof arguments[index]=="number")
//       arr.push(arguments[index])
//    }
//    console.log(arr);
//    return arr.reduce((acc,curr)=>
//       acc+curr,0)
// }
 //console.log(sumAll(3,4,5,6,"asdkask",1));
//19 true





// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
// function describeValue(){
//    if(!arguments.length){
//       return 'none';
//    }
//    if (arguments.length==1){
//       return `one: ${arguments[0]}`
//    }
//    if (arguments.length==2){
//       return `two: '${arguments[0]}' , '${arguments[1]}'`
//    }
//    else{
//       return "too many";
//    }
// }
// console.log(describeValue());
// console.log(describeValue(1));
// console.log(describeValue(1,2));
// console.log(describeValue(1,2,3));





// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
// let arr=[
//    n=>n+1,
//    n=>n*2,
//    n=>n-2
// ]
// let start=10
// for (let index = 0; index < arr.length; index++) {
//    start = arr[index](start);
// }
// console.log(start);
//20





// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
// function makeMultiplier(factor){
//    return function (n){
//       return n*factor;
//    }
// }
// console.log(makeMultiplier(2)(7));
// console.log(makeMultiplier(3)(7));
//14
//21



// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
// function once(fn){
//    let flag=true;
//    return function(s){if (flag){
//       flag=false
//       return fn(s);
//    }   }
// }
// let res=once(function(kk){
//          console.log(kk);
//       })
// res("here")
// res()






// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.

// function makeAdder(start){
//    let counter=start;
//    return function(n){
//       counter+=n;
//       return counter
//    }
// }

// let adder=makeAdder(5)
// console.log(adder(2));
// console.log(adder(3));
// console.log(adder(4));

// 15. (Bonus) Implement memoize1(fn). Show it caches slowSquare(9) twice.




// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.

// let omar = {
//   name: "Omar",
//   sayHi: function() {
//     console.log("Hi " + this.name);
//   }
// };
// omar.sayHi(); 
// //it will be a HI omar because it is direct
// let f = omar.sayHi;
// f(); 
// //it will be undefined



// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
// let sara ={name:"sara"}
// omar.sayHi.call(sara)
// omar.sayHi.apply(sara)


// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.

// let greeter = {
//   name: "Omar",
//   greet: function(greeting, sign) {
//     console.log(greeting + " " + this.name + sign);
//   }
// };
// let aboya = { name: "Ali" };
// greeter.greet.apply(aboya, ["Hello", "!"]);



// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
// let greeter = {
//   name: "Omar",
//   greet: function(greeting, sign) {
//     console.log(greeting + " " + this.name + sign);
//   }
// };
// let aboya = greeter.greet.bind({ name: "Ali" });
// aboya("samo 3liko", "!"); 
// aboya("keef el akhbar", "?"); 
// aboya("hapipi", " :)");     



// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).

// let greeter = {

//   greet: function(greeting, sign) {
//     console.log(greeting + " " + this.name + sign);
//   }
// };
// function helo(omar,sign){
//    let greeting=greeter.greet.bind(omar,"hello")
//    greeting(sign)
// }
// helo({name:"omar"},"!")
// helo({name:"Ali"},"*")
// helo({name:"mohamed"},"!!")
// helo({name:"yassen"},"<#")




// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.

// function funny() {
//   let arr = [];
//   for (let i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
//   let rev = arr.slice().reverse();
//   console.log("normal ", arr);
//   console.log("reversed ", rev);
// }

// funny(1,2,3,4,5);





// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
// let arr = [1,2,45,3];
// // let maxi = Math.max.apply(null, arr);

// // console.log(maxVal);

// let maxi = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxi) {
//     maxi = arr[i];
//   }
// }
// console.log(maxi);
// //45







// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
// let maxi = Math.max.call(null,1, 2, 45, 3);
// console.log(maxi); 
// //45
// let arr = [1, 2, 45, 3];
// let max1 = Math.max.apply(null, arr);
// console.log(max1); 
//45
//apply is better because you have to spread the values in the arguments but with apply you can just send the array



// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.

// let uname = "Omar";
// let age = 21;
// console.log(`User: ${uname} Age: ${age + 1}`);






// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.

// let title = "hello";
// let body = "The body";

// let res = "Title: " + title + "\n" +
//               "Body: " + body + "\n" 
// console.log(res);






// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
// if(1){
//    var x=20;
//    let y=12;
//    console.log("from inside x is " ,x);//20
//    console.log("from inside y is ", y);//12
// }
// console.log("from outside x is ",x);//20
// console.log("from outside y is",y);//undefined




// 28. Write code that tries to log x before let x = 5;.
// console.log(x);
// let x=5//Uncaught ReferenceError: Cannot access 'x' before initialization
//    //  at script.js:379:13



   // 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).

// const arr = [1, 2, 3];

// arr.push(4);
// console.log(arr);//true [1,2,3,4]
// arr=[6,7,8]
//Uncaught TypeError: Assignment to constant variable.
   //  at script.js:391:4





// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

// let squarefull=(n)=>{return n*n}
// let squarecon=n=>n*n
// let squareinline=[1,2,3].map(n=>n*n);
// console.log(squarefull(2));
// console.log(squarecon(5));
// console.log(squareinline);
//4
//25
//[1,4,9]





// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
// const wrongobj = () => { v: 10 }; 
// console.log(wrongobj()); 
//undefined because of the parenthese 
// const notwrongobj = () => ({ v: 10 }); 
// console.log(notwrongobj()); 
//{v:10}



// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).

// const omar = {
//   name: "Omar",
//   sayHi: () => {
//     console.log("Hi, " + this.name);
//   }
// };

// omar.sayHi(); 
// Hi,  because it refernce to the window not the object 


// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).

// function greet(uname){ return 'Hi '+uname+'!'; }
// const gre=(uname)=>{
//    return 'Hi '+uname+'!'; 
// }
// console.log(gre("omar"));


// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
// let arr=[
//    n=>n+2,
//    n=>n*3,
//    n=>n-1
// ]
// function runPipeline(n, fnsArray){
//    let x=n;
//    for (let index = 0; index < fnsArray.length; index++) {
//       x= fnsArray[index](x);
//    }
//    return x
// }

// console.log(runPipeline(5,arr));
//20


// 36. (write answers BEFORE running):

   //i didn't know this one i had to search to know it 


   //  var obj = { n: 1, inc: function(){ this.n++; return this.n; } };//n is  key with value 1 and method inc sees the n value so increament by 1
   //  var inc = obj.inc;//this is now longer point on the obj  it seams on the window 
   //  console.log(obj.inc());//return 2 normally
   //  console.log(inc()); //return undefined 
   // // Explain both lines.




// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
// function maker(){
//    let counter=1
//    return ()=> counter++;
// }
// let arr=[]
// for (let index = 0; index < 1000; index++) {
//    arr.push(maker());
// }
// console.log(arr[0](),arr[0](),arr[3]());
//1 2 1 


// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.

// function safeFirst() {
//   if (arguments.length === 0) {
//     return undefined; // no args passed
//   }
//   else {
//    arr=[]
//    for (let index = 0; index < arguments.length; index++) {
//       arr.push(arguments[index])
//    }
//   }
// }


// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
// function factory(namesArray) {
//   const res= {};
//   for (let index = 0; index < namesArray.length; index++) {
//     let count = 0;
//     res[namesArray[index]] = function () {
//       count++;
//       return count;
//     };
//   }
//   return res;
// }
// var counters = factory(['a', 'b']);
// console.log(counters.a()); // 1
// console.log(counters.a()); // 2
// console.log(counters.b()); // 1 
// console.log(counters.b()); // 2

// 40. Write 2 things that were new or tricky today (comment).
 //i can name you 20 
 //i used to love js 
 // but i have descovered that it was not js 


























































































// function statement --> hoisted
// sum(5,6);
// // x(5,5)
// function sum(a, b){
//     console.log( a + b)
// }
// // function expression --> not hoisted --> function name is not mandatory 
// var x = function(a,b){
//     // anonymous function 
//     console.log("Hello")
//     return a * b
// }

// var factorial = function fact(n){
//     if(n <=1 ){
//         return 1;
//     }
//     return n * fact(n-1)
// }

// // es6 arrow function 
// let myFun = ()=>{
//     console.log("Hi")
// }



// functions are first class object (citizens)
/**
 * 1- return function from function -> closure
 * 2- pass function to another function as parameter
 * 3- you can assign it to variable 
 * 4-
 */


// function sum(a,b){
//     return a+ b
// }

// function sum(a,b,c){
//     return a+b+c
// }


// function sum(){
//     // if(typeof Number(arguments[0]) === "number"){
//     //     // do something
//     // }
//     // if(arguments.length == 2){
//     //     // do another thing
//     // }
//     // console.log(typeof arguments.length)
//     for (var i =0; i < arguments.length; i++ ){
//         console.log(arguments[i])
//     }
// }

// sum(5)
// sum(5,4)
// sum(5,6,7)
// sum()



// CLOSURE


// function outer(){
//     var count = 0 ;
//     return function inner(){
//         // var x =5;
//         count ++;
//         // debugger
//         console.log(count)
//     }
// }


// var counterOne = outer()
// var counterTwo = outer()


// counterOne()
// counterOne()
// counterTwo()
// counterTwo()
// counterTwo()


// function once(fn){
//     var done = false
//     return function(uName){
//         if(!done){
//             done= true;
//             return fn(uName)
//         }
//     }
// }

// var greetOnce = once(function (uName){
//     console.log("Hello only one " + uName)
// })
// var sayHiOnce = once(function(){
//     console.log("Hi once")
// })


// sayHiOnce()
//greetOnce("Omar") // will run
// greetOnce() // nothing
// greetOnce() // nothing
// greetOnce() // nothing
// greetOnce() // nothing
// greetOnce() // nothing



// var userName = "Hussein"
// var userOne = {
//     userName : "Omar",
//     age: 28,
//     sayHi : function(){
//         console.log("Hello " + this.userName) // this refers to the caller object
//     }
// }
// var userTwo = {
//     userName : "Kareem",
//     age: 28,
//     greet: function(greeting, sign){
//         console.log(greeting + " " +  this.userName + " " + sign )
//     }
    
// }
// var userThree = {
//     userName : "Ali",
//     age: 28,
// }

// call , apply, bind

// userOne.sayHi()
// userOne.sayHi.call(userTwo) //kareem

// userOne.sayHi.call(userTwo,)

// userOne.sayHi.apply(userThree,)

// userTwo.greet("Hello" , "!")
// userTwo.greet.call(userThree, "Hi", "##")
// userTwo.greet.apply(userThree, ["Hola", "!!"])


// console.log( Math.max(1,4,99,66))

// var newArr =[14,66, 299,6]


// console.log( Math.max.apply(null, newArr));


// var myMath ={
//     num: [1,5,10],
    
//     max :function (x,y){
//         if(x>y) return x
//         // Does not need "this"
//     },
    
//     findMax: function (){
//         var myNums = this.num
//         // find the max in myNums
//     }
// }
// myMath.max(5,6)
// myMath.findMax()

// userTwo.greet.apply(userThree, ["Hola", "!!"])
// var greetAli = userTwo.greet.bind(userThree, "hi", "!")
// greetAli()
// var greetAli = userTwo.greet.bind(userThree)
// greetAli("HI","^^");
// greetAli("ahlan","**");
// greetAli("Hola","$");


// --------------------------- ES6 -----------------------------
// var x =5

// if(true){
//     var x =20
//     console.log("Inside if: "+ x)
// }
// console.log("outside if: "+ x) //not the wanted behavior 

// let x =5

// if(true){
//     let x =20
//     console.log("Inside if: "+ x)
// }
// function scopeFun(){
//     var x = 15
//     console.log(x)
// }
// scopeFun()
// console.log("outside if: "+ x) //not the wanted behavior 



// const y = 10;
// y= 15;

// const myArr = [2,6]
// myArr.push(8)
// console.log(myArr)

// const user = {
//     userName : "ahmed"
// }
// user.userName = "ali"
// console.log(user)

// console.log(x)
// let x = 5;


// let x = 10;
// let x = 20; //error
// console.log(x)

// const PI = 3.147;


// template literals 

// let uName = "omar"
// let age = 28
// let helloString = "Hello" +  " "+ uName + " "+  "Your age is: " + age;
// console.log(helloString)

// let newStr = `Hello ${uName} Your
// age is ${age + 5}`

// console.log(newStr)

// arrow functions

// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(5,6))


// const newAdd = (x,y) => x + y;  
// console.log(newAdd(7,8))

// const squareFn = x => x * x
// console.log( squareFn(5))

// const consoleHi = uName => console.log(`hello ${uName}`)
// consoleHi("Omar")



// function Person(){
//     this.age = 0;

//     setInterval(function(){
//         this.age++
//         console.log(this.age)
//     }, 1000)

// }
// new Person();


// function Person(){
//     this.age = 0;

//     setInterval(()=>{
//         this.age++
//         console.log(this.age)
//     }, 1000)

// }
// new Person();

