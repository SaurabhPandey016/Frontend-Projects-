// We've Two Types of Data types in Javascript

// 1. Primitive -> boolean, int, string, char.. so on;
// 2. Non - Primitive --> Jisko Reference Types bhi kehte hai;

// ===================================================================
// Types of Reference Types
// 1. Objects
// 2. Array
// 3. Functions;

// Now We Discuss It in Deep;-->
// ==================================================================================

//  To Reference Types Inhe Kyu Kehte hai!
//  To Jese Hume Primitive Data Types pe Pata hota hai ki (int) itni size lene wala hai Fixed, (bigInt) itni size ka
// Pr Reference Pe Exa nhi hota hai;

// =======================================================================================

// How Reference Types Are STored--> ---------------------

// So Wheneva We Talk About any program to unko 2 Type Se Memeory Allot Hoti hai Javascript me;

// 1st ----> Stack Memory
// {
//     To Jitne bhi primitive types hai --> 
//     1 bool 
//     2 integar
//     3 String
//     4 null
//     5 undefined

//     ye sab stack memory lete hai
// } ---------------------------------

// 2nd------> Heap Memory
// {
//     // Saare ke saare Reference Types Heap memory me store hote hai -> Objects, arrays, functions sb.. kese ?? dekho;

//     // example:- 
//     // {
//     //       Ye arr variable ek refernce hai heap memory ko jo point kr rha;
//             // let arr = [1, 2, 3, 4, 5];
//             // console.log(arr);

//             // to iski memory heap ki mili hogi pr jo arr hai wo ek pointer bna hoga stack memory pe
//             // jo ek address ko point kr rha hoga in heap memory;
//     // }
// }

// ---------------------------------------------------------------

