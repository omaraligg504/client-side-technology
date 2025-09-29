//Try AI directly in your favorite apps … Use Gemini to generate drafts and refine content, plus get Gemini Pro with access to Google's next-gen AI for EGP 699.99 EGP 0 for 1 month
//1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.

// var st= "258.90"
// var a = parseInt(st)
// var b =parseFloat(st)
// console.log(a,b)
//result 258 258.9


//2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
// var res=+7.45678.toFixed(2)
// console.log(res)
//result : 7.46



//3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
// console.log(Number.isNaN("abc"))
// console.log(isNaN("12"))
// result : false false


//4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
//console.log((0.2+.1).toFixed(1)==0.3)
//result: true




//5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
// function safelyparse(n){
//     return !Number.isNaN(parseInt(n))?parseInt(n):null
// }

// console.log(safelyparse("12p"))
// console.log(safelyparse("p12p"))
//result: 12 null



///6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
// function isFiniteNumber(n){
//     return n!=Infinity && n!=null &&  !Number.isNaN(parseInt(n))
// }
// console.log(isFiniteNumber(5.1))true
// console.log(isFiniteNumber(5))ture
// console.log(isFiniteNumber("12"))true
// console.log(isFiniteNumber(-1))true
// console.log(isFiniteNumber(null))false
// console.log(isFiniteNumber(Infinity))false
// console.log(isFiniteNumber("pasdj"))false
// console.log(isFiniteNumber("p12"))false



// 7. Remove leading and trailing spaces from the string "   hello world  ".
// console.log("   hello world  ".trim())






// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
// var s="javascript"
// console.log(s.slice(4,),s.substring(4,))


// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
//console.log("Banana Mania".toLowerCase().split("a").length-1)


// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
// function reverses(n){
//     return [...n].reduce(function(acc,item){
//         return item+acc;
//     },"");
// }
// console.log(reverses("omar"))


// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
// function capitalizeWords(s){
//     return s.split(" ").map(function(element){
//         return element[0].toUpperCase()+element.slice(1)
//     }).join(" ")
// }
// console.log(capitalizeWords("omar sda as"))


// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.

// function extract(n){
//     return n.split("/")[2]
// }

// console.log(extract("https://example.com/path/to/page"))



// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
// function naiveIndexOf(st,su){
//     if(su==="")return 0;
//     for( var i =0 ; i<=st.length-su.length;i++){
//                 var sub=st.substring(i,i+su.length);
//                 if(sub===su)return i;
//     }
//     return -1
// }

// ///
// console.log(naiveIndexOf("omar ali is the best","ali"))




// Buggy code:\
//  var s = 'hello'; if (s.toUpperCase() == 'HELLO') { console.log('match'); }  // Fix and explain issue.
//the comparison is wrong it just putting the value on it not compare it




// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
// var arr=[1,2,3,4,5]
// arr.push(6)
// arr.unshift(0)

// // 16. Remove the last element and store it. Remove the first element and store it.
// var last=arr.pop()
// var first=arr.shift()
// console.log(last,first,arr)


// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array

// var arr= [10,20,30,40,50].join("-").slice(0,9).split("-")
// arr.pop()
// console.log(arr)





// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
// var arr= [1,2,3,4,5]
// arr.splice(2,2,"a","b")
// console.log(arr)






// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).

//slice return copy of subarray and don't mutate the original 
// var arr = [1, 2, 3, 4, 5];

// var sliced = arr.slice(1, 3); 
// console.log(sliced); 
//console.log(arr); [1, 2, 3, 4, 5]
//splice mutate the original array
// var arr2 = [1, 2, 3, 4, 5];

// var spliced = arr2.splice(1, 3); 
// console.log(spliced);  [2, 3, 4]
// console.log(arr2);    // [1, 5]
//

//20. Create a sparse array by assigning index 7 on a fresh [] then log length.
//var arr = [];        // fresh empty array
// arr[7] = "hello"; 
//console.log(arr.length); 8



//21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).


// var arr=[true,1,0, null, "asdas",false]
// var narr=arr.filter(function(n){
//     return n!=0&&n!=false&&n!=null&&n!=undefined?true:false;
// })
// console.log(narr);



// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .


// function deepClone1D(arr){
//     var newarr=[]
//     for (var i =0 ; i< arr.length; i++){
//         newarr[i]=arr[i];
//     }
//     return newarr;
// }
// var arr=[1,2,4,"omar",1]
// console.log(deepClone1D(arr))



// 23. Map [1,2,3] to their squares using map.

// var newarr=[1,2,3].map(function ( el){
//     return Math.pow(el,2);
// })
// console.log(newarr);




// 24. Filter [5,10,15,20] to keep values >= 12.
// var newarr=[5,10,15,20].filter(function ( el){
//     return el>=12    
// })
// console.log(newarr);





// 25. Reduce [2,4,6] to product.
// var newarr=[2,4,6].reduce(function(acc,item){
//     return acc*item;
// },1)

// console.log(newarr);





// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.

// function arraySum(a){
//     return a.reduce(function(acc,item){
//         return acc+item
//     },0)
// }
// console.log(arraySum([1,2,3,4,5,6]));

// function arraySumLoop(a){
//     var sum= a[0];
//     for(var i =1;i<a.length;i++){
//         sum+=a[i];
//     }
//     return sum;
// }
// console.log(arraySumLoop([1,2,3,4,5,6]));
// console.log(arraySum([1,2,3,4,5,6])===arraySumLoop([1,2,3,4,5,6]));





// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
// function produce(arr){
//     var newarr=[];
//     for(var i =0; i<arr.length;i++){
//         newarr[i]=arr[i][0];
//     }
//     return newarr;
// }

// console.log(produce(['Ali','Sara','Kareem']));







// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.

// function unique(a){
//     newarr=[]
//     a.sort();
//     var pre=a[0]
//     newarr.push(pre);
//     for(var i =1;i<a.length;i++){
//         if(a[i]===pre)continue;
//         newarr.push(a[i])
//         pre=a[i];
//     }
//     return newarr
// }
// console.log(unique([1,1,2,3,3,1,2,3,4,6,3,2,1]));









// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).

// function flatten1(a){
//     var newarr=[]
//     for(var i =0 ; i<a.length;i++){
//         if ( a[i] instanceof Array){
            
//             for(var j=0; j<a[i].length;j++)
//                 {newarr.push(a[i][j])}}
//         else newarr.push(a[i]);
//     }
//     return newarr
// }

// console.log(flatten1([1,[2,3],[4],5]));




// 31. Create object person with name and age; add a new property city after creation.

var person={
    name:'omar',
    age:22
}
person.city='el shrouk'
// console.log(person);

// 32. Access a property via bracket notation with a dynamic key variable.

// console.log(person["name"]);



// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).

// function countKeys(obj){
//     var c=0;
//     for ( var k in obj){
//         c++;
//     }
//     return c;
// }
// console.log(countKeys(person));



// 39. List (as comments) 5 different values that coerce to false in ES5.
//false
//0
//null
//undefined
//""



// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.

// function safeToBoolean(v){
//     return v===true||v===1 || v==='1'||v==='true'
// }
// console.log(safeToBoolean('true'));

// 41. Create a Date for Jan 1, 2025 00:00 local.

// var  d = new Date(2025, 0, 1, 0, 0, 0);
// console.log(d);


// 42. Get the current year from new Date().

// var dt= new Date();
// var year=dt.toString().split(" ")[3]
// console.log(year);



// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
// function daysBetween(d1,d2){
//     var millies= 1000 * 60 * 60 * 24;
//     var dif=Math.abs(d1.getTime()-d2.getTime())
//     return Math.floor(dif/millies)
// }

// var d1 = new Date(2025, 0, 1);   
// var d2 = new Date(2025, 0, 10); 
// console.log(daysBetween(d1,d2));

// 44. Generate a random integer 1..100.

// console.log(Math.floor(Math.random()*100)+1);
// 

// 45. Round 4.567 to nearest integer, round down, and round up (three results).

// console.log(Math.round(4.567));
// console.log(Math.ceil(4.567));
// console.log(Math.floor(4.567));



// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).

// function randomIntArray(n,min,max){
//     var res=[]
//     for(var i =0; i<n;i++){
//         res.push(Math.floor(Math.random()*(max-min+1))+min)
//     }
//     return res;
// }
// console.log(randomIntArray(7,10,20));


// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
// function parsePriceList(str){
//     var obj={}
//     str.split(";").forEach(function (el) {
//         obj[el.split(":")[0]]=+el.split(":")[1]
//     });
//     return obj
// }

// console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3"));

// // 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
// function filterAndSortNumbers(arr ){
//     return arr.filter(function(el){
//         return Number.isFinite(el)
//     }).sort(function(a,b){
//         a-b;
//     })
// }

// console.log(filterAndSortNumbers(["omar",-1,9,Infinity, null,NaN,undefined,12]));













