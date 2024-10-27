// Class Hoisting 

// what is class -> yani class wo hai jese uski age weight, rank blue print bna rhe jb tb wo class h
// or jb bluePrint Execute hoga actual thing me to use object keh dege

// ================================================================
// Class Hoisting is not possible 

// example
// class Human {

// };
// let obj = new Human(); working but

// let obj = new Human();
// class Human {

// }; // not working;
 

// =========================================================================================




// var greet;
// console.log(greet)


// var greet = function() {
//     console.log("Namaste Dunia");
// }





// ==============================================================================================


// Why Functions are called first class citizens Because you can use function in many case


// 1. Assign to variable;
// {
//     let greet = function() {
//         console.log("Namaste Dunia");
//     }
// }

// 2. Can use in Object as well {
    
// }


// 3. return function in function {

    // function solve(number) {
    //     return function(number) {
    //         return number*number;
    //     }
    // }

    // let ans = solve(5);

    // let finalAns = ans(10);
    // console.log(finalAns);

//}

// 4. use function in data structure
    // using array as function;

    // const arr = [
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
//     function(a,b) {
//         return a*b;
//     }
// ];

// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);

// 5. as a property of an object {

//     // let obj = {
//     //     age:25,
//     //     wt: 36,
//     //     ht:180,
//     //     greet: ()=>{
//     //         console.log("hello Dunia");
//     //     }
//     // }

//     // console.log(obj.age);
//     // obj.greet();

// }



// 6. Function Call stack explained -- fucnction k andr function {

//     // function greetMe(greet, fullName) {
//     //     console.log("hello ", fullName);
//     //     greet();
//     // }


//     // function greet() {
//     //     console.log("Greeting for the day")
//     // }

//     // greetMe(greet, "Babbar");

//     // greet();

// }



// 7. Function Expression hoisting hoti hi ya nahi To Nhi hoti! Xirf var me hogi undefined baki me error
// example 
{
    // sayHello();
    // let sayHello = function() {
    //     console.log("Hello Jee, kaise ho saare");
    // }

}





