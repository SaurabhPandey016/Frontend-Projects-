// =========================================================================================================

// 1.   Push()


// example
// let arr = [1, 2, 3, 4, 5];
// arr.push(6); // Added in last of arr
// console.log(arr); // [1, 2, 3, 4, 5. 6];


// =========================================================================================================


// 2. Pop() -> Peeche wla remove
// example
// let arr = [1, 2, 3, 4, 5];
// arr.pop(); // Removed last element of arr
// console.log(arr); // [1, 2, 3, 4];


// =========================================================================================================


// Important --> 
{
    //1. Every ->
    {
        // The every() method executes a function for each array element.

        // The every() method returns true if the function returns true for all elements. -->

        // The every() method returns false if the function returns false for one element. -->

        // The every() method does not execute the function for empty elements.

        // The every() method does not change the original array

        // it only Works For Array;
        // Example-> 
        let arr = [1, 2, 3, 4, 5];
        let ans = false;
        
        arr.every(arr, function(value) {
            return value > 5;
        });
        
        console.log(ans);
    }

}


// =========================================================================================================



// 3. Shift() Samne Wla remove
// example
// let arr = [1, 2, 3, 4, 5];
// arr.shift(); // Removed first element of arr
// console.log(arr); // [2, 3, 4, 5];



// =========================================================================================================



// 4. Unshift() -> saamne Add
// example
// let arr = [1, 2, 3, 4, 5];
// arr.unshift(0); // Added in first of arr
// console.log(arr); // [0, 1, 2, 3, 4];





// =========================================================================================================


// 5. Slice() -> New Part Nikaal Skte;
// example
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.slice(1, 3); // [2, 3] Yaani 1st index se leke 3rd tak 3 not included Cheeze dal do naye array me
// console.log(arr2); // [2, 3];
// console.log(arr); // [1, 2, 3, 4, 5]





// =========================================================================================================



// 6. Splice() -> Array ke Content ko Change(insert, remove, replace);
// example
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 1); // 3rd index se 1 element remove krdo;
// console.log(arr); // [1, 4, 5];

// let brr = [1, 2, 'love', 'saurabh', true, false, true, null, 13, 14, 15]; 
// brr.splice(4, 0, 'Pandey'); // 4th Index pe 0 Elemnts remove kia or pandey daal dia;
// console.log(brr);


// =========================================================================================================


// 7. map()
// Example
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.map((item) => item * 2); // MAp Se ham kaam kra ske arrays Par
// console.log(arr2); 

// Example 2
// man lo array dia hai (1, 2, 3, 4, 5, 6);
// to map ka use kro or return krdo -> (1, 4,9, 16, 25, 36) -> squares;

// Create Again
// let arr = [10, 20, 30, 40];
// let brr = arr.map((number) =>
// {
//     return number * number;
// });
// console.log(brr);
// console.log(arr);

// Example 3;
// let arr = [10, 20, 30, 40];
// arr.map((number)=> {
//     console.log(number*number); // Takes values and performs action
// });
// console.log(arr); // Array remains same Do It Created Deep Copy;




// =========================================================================================================



// 8. filter() -> Items Filter Krne k Liye Jese Sirf Strings ya sirf even numbers iske liye;
// Example

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.filter((item) => item > 2); // Filter Se ham items ko condions k hisab se daal skte;
// console.log(arr2); // [3, 4, 5] 

// example 2;
// let arr = [1, 2, 3, 4, 5, 6];
// let brr = arr.filter((number) => {
//     if(number % 2 === 0) return true;
// })
// console.log(brr);
// console.log(arr); // same it dont modifies the array just performs action given;


// let arr = [1, 2, 3, 4, 5, 6, 'saurabh', 'apndety', true, 'jinda' ,null, null, null, undefined, undefined];
// // let brr = arr.filter((number) => {
// //     if(typeof(number) === 'string') return true;
// // });
// // console.log(brr);
// // console.log(arr);

// let brr = arr.filter((number) => {
//     return typeof(number) === 'undefined'; // Add COlon then write it'll help
// });
// console.log(brr);

// =========================================================================================================


// 9. reduce() -> Single Value ka Op Niklna hai to reduce ka use;

// Example
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, item) => acc + item, 0); //
// console.log(sum); // 15
// Isko Smjho Ache se!!

// Example 2;
// let arr = [1,2 ,3, 4, 5, 6, 7];
// // and i want ki mera op in sb ka sum ajaye to kese? use reduce
// let brr = arr.reduce((acc, curr)=> {
//     return acc + curr;
// }, 0); yha pe accumulator ki value initialize hui = 0; to curr ne aone ao arr[0] ki value leli;
// tehn return acc + curr = 0 + 1 = 1; to acc ki value 1 hogyi, then curr aage badha on 2; return acc + curr; 1+2 = 3 acc value is 3 now; and so on
// console.log(brr);


// =========================================================================================================


// 10. sort()
// Example


// Example 2---> Descending order
// let arr = [10, 20, 30, 40, 50];
// let brr = arr.sort((a, b) => {
//     return b - a;
// })
// console.log(brr);

// Example 3 ---> Ascending Order

// let arr = [10, 20, 30, 40, 50];
// let brr = arr.sort((a, b) => {
//     return a - b;
// })
// console.log(brr);

// =========================================================================================================
// 11. forEach() -> Same As Tradition Loop bx Saara traverse kr skte see examples;

// Example 1
// let arr = [1,2,3];
// arr.forEach((value, index) => {
//     console.log("value: " , value , "index: " , index);
// });

// let brr = function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;

//     arr.forEach(element => {
//         sum = sum + element;
//     });
//     return sum;
// }

// console.log(brr);

// ===============================================================================================================

// for in Loop used For Enumerated Properties of Objects -> Yaani Object k andr ke items ke liye;
// example->

// let obj = {

//     name: "saurabh",
//     sirName: "pandey", 
//     age : 25,
//     'gender': "male", 
//     "au btabab kuchu" : "ab hoiga ka btai sb bdiya hi hai", 

//     getName : function() {
//         console.log(name);
//     } 
        

// }
// // obj.getName();
// // let name = obj["au btabab kuchu"];
// // console.log(name);
// // console.log(typeof(obj["au btabab kuchu"]));

// // Using For In Loop;
// for(let value in obj) {
//     // console.log(value); // Prints all the keys of Object
//     // wanna Print keys ki value also?

//     console.log(value , " ", obj[value]); // Both gets printed
// }


// =========================================================================================================
// 14. find() --> Homework hai Ye Dekhna baad me
// =========================================================================================================
// 17. indexOf()

    // let arr = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 7, 8, 9];;
    // console.log(arr.indexOf(9));

// =========================================================================================================
