// 1- Write a function that greets a user, using a default parameter for the name.
// function func(name="omar"){
//     console.log(`hello ${name}`)
// }
// func()



// 2- Write a function that calculates the total price with a default tax rate parameter.
// function calcPrice(price,tax=0.2){
//     console.log(price*tax+price);
// }
// calcPrice(100,0.14)



// 3- Write a function that creates a user object, using a default role parameter.
// function createUser(name,age,role="user"){
//     return {name,
//         age,
//         role
//     }
// }
// console.log(createUser("omar",33,"admin"))
// console.log(createUser("omar",33,))

// 4- Write a function that multiplies any number of arguments using the rest operator.
// function multi(...res){
//     return res.reduce((acc,item)=>{return acc*item},1)
// }
// console.log(multi(1,2,3,4))

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
// function multionone(...res){
    
//     return res[0]*(res.reduce((acc,item)=>{return acc+item},0)-res[0])
// }
// console.log(multionone(3,2,3,4))



// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
// function conc(...res){
//     return [...res]
// }
// console.log(conc("omar","ali","hasan"))

// 7- Create a new array by combining two arrays using the spread operator.
// function conc(arr1,arr2){
//     return [...arr1,...arr2]
// }
// console.log(conc([1,2,3,4,5],[78,89]))



// 8- Copy an array using the spread operator.
// function cop(arr){
//      let newarr=[...arr]
//      return newarr;
// }
// let old=[1,2,3,4,5]
// let newarr=cop(old)
// old[0]=2
// console.log(old)
// console.log(newarr)

// 9- Merge two objects into one using the spread operator.
// function merge(obj1,obj2){
//     return {...obj1,...obj2}
// }
// console.log(merge({name:"omar", age:22},{school:"ain shams", name:"ali"}))



// 10- Update a property in an object using the spread operator to create a new object.

// let omar={name:"omar", age:22}
// let ali ={...omar,name:"ali"}
// console.log(ali)


// 11- Destructure an array to get the first and second elements into variables.
// let [fist,second]=[1,2,3,4,5]
// console.log(fist,second)


// 12- Destructure an array to get the first element and the rest into another array.
// let [fist,...second]=[1,2,3,4,5]
// console.log(fist,second)

// 13- Destructure an object to extract two properties into variables.
// let omar={name:"omar", age:22}
// let {name,age}=omar
// console.log(name,age)
// 14- Destructure an object and rename the extracted properties.
// let omar = {
//   name: "Omar",
//   age: 21,
// };

// let { name: fullName, age: years} = omar;

// console.log(fullName); 
// console.log(years);   


// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.


// function ret(obj,...par){
//     for (let i of par) {
//         let { [i]: value } = obj;  
//         console.log(value);
//     }
// }
// let omar={name:"omar", age:22}
// ret(omar,"name")
// ret(omar,"age","name")