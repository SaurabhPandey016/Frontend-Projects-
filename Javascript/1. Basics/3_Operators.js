// Operators in JavaScript are symbols used to perform operations on variables and values. They are used to manipulate data, make decisions, and control the flow of a program. Here are the different types of operators in JavaScript:

// ==============================================================================================================

// 1.Arithmetic Operators

// Arithmetic operators are used to perform mathematical operations on numbers.
// Arthimatic operators are of two types ;

// 1-> Binary Operators -> Those who needs two operands to operate and do stuffs;
// example -> (a + b)

//2-> Unary operators
// Example -> a++, ++b; -> are unary Operators; pre-increment/decrement and pos-tincrement/decrement are unary types;

// Arithmatic Operators-->

// + (Addition)
// - (Subtraction)
// * (Multiplication)
// / (Division)
// % (Modulus)
// ** (Exponentiation) Power Find krne k liye

// Example:
// Copy code
// let x = 5;
// let y = 3;
// console.log(x + y); // Output: 8
// console.log(x**y); // Output: 125

// ==============================================================================================================

// 2. Assignment Operators

// Assignment operators are used to assign a value to a variable.

// = (Assignment)
// += (Addition assignment)
// -= (Subtraction assignment)
// *= (Multiplication assignment)
// /= (Division assignment)
// %= (Modulus assignment)
// **= (Exponentiation assignment)

// Example:
// Copy code
// let x = 5;
// x **= 3;
// console.log(x); // Output: 125 -> Tested

// =============================================================================================================

// 3. Comparison Operators -> Truthy ya To Falsy;

// Comparison operators are used to compare two values.

// == (Equal) ->  (Loose equality) Yaani let a = 12, b = "12" To Ye True Dega Less strict
// === (Identical) -> (strict Equaity) ye let a = 12, b = "12" To Ye False Dega Identical data type and value bhi
// != (Not equal) -> (Loose Not-Equality) isme value and Data type dono same ni hue tb b false
// !== (Not identical) -> (Strict Not-Equality) Example provided;
// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)

// Example:

// Copy code
// let x = 5;
// let y = '5';
// console.log(x > y); // Output: true
// console.log(x === y); // Output: false
// console.log(x != y); // Output: false Q? Qki value 5 to hai pr different data type h to loose k kran sirf value dekha ans judge kia;
// console.log(x !== y); // Output: true; Both VAlue and Data types are Judged;

// ===========================================================================================================

// 4.Logical Operators

// Logical operators are used to combine two or more conditions.

// && (And) dono 1 tb true
// || (Or) ek b 1 tb true
// ! (Not) agr 1 to 0 krdega

// Example:

// Copy code
// let x = 5;
// let y = 3;
// console.log(x > y && x > 2); // Output: true
// console.log(x > y || x < 2); // Output: true
// console.log(!(x > y)); // Output: false

// Most Important -> Workng with non Booleans; Iska Kya Mtlb hai? ye logical se kese deal krta hai

// example --> 
// (false && 'babbar) 
// true || 15 to kya output;
// to iska kya ayega?
// to isko computr Falsy and truthy k hisab se treat krega dekho kese--> 

// 1. Falsy -> undefined, null, 0, false, Nan-> (not a number), '' <- Empty String all are falsy;
// 2. truthy -> Anything which is Not falsy is Truthy;

// examples;---==================

//  To Logic same hi rhega jese


//               falsy     truthy to false && truth ka op kya if && used -> ek b false mtlb false so op = false;
// let status = (false && 'babbar'); //output:false;
// console.log(status);
// status = (false || 13); //op -> ek b true to true; so truthy value = 13 ayega;
// console.log(status);
// status = (true || 'Hello'); //to qki phle hi true hai to true ajayega;
// console.log(status);

// // pr agr bhot saari terms likhi h tab kya? example;
// let random = (false || false || false || 'babbar' || false);
// console.log(random); // op = babbar; jbtk koi truthy ni milti usko check krega jese hi mili cut krke bahar;

// To ixko short-circuiting kehte hai is concept ko multiple values hai to tbtk check hogi jbtk you dont find anything;

// ex  -> same concept used;
//             T    &&     T = T      F
//  Then T && F = False So Op = false;
// let status = ((true && 'babbar') && false);
// console.log(status);// op = babbar if anything greater than boolean written so it'll send babbar;

//More complex Example;
// let status = (false || false || 10 || 12 || 15);
// console.log(status); // op = 10; it'll not check further

// =============================================================================================================

// String Operators

// String operators are used to manipulate strings.

// + (Concatenation)
// .length (find length of array string)
// typeof(x) -. give you the type of object you're using

// Example:

// Copy code
// let str1 = "Hello";
// let str2 = "World";
// console.log(str1 + " " + str2); // Output: "Hello World"

// =================================================================================================================

// Ternary Operator

// The Ternary operator is used to execute one of two expressions based on a condition.

// let x = 5;
// let y = 7;

// console.log(x > y ? true : false);
// Example:

// Copy code
// let x = 5;
// let result = x > 10 ? "x is greater than 10" : "x is less than or equal to 10";
// console.log(result); // Output: "x is less than or equal to 10"

// ==============================================================================================================

// Unary Operators

// Unary operators are used to perform an operation on a single operand.

// + (Unary plus)
// - (Unary minus)
// ! (Logical not)
// ~ (Bitwise not)
// typeof (Type of)
// void (Void)

// Example:
// Copy code
// let x = 5;
// console.log(+x); // Output: 5
// console.log(-x); // Output: -5
// console.log(!x); // Output: false

// ===================================================================================================

// Bitwise Operators

// Bitwise operators are used to perform operations on the binary representation of numbers.

// & (Bitwise and)
// | (Bitwise or)
// ^ (Bitwise xor)
// ~ (Bitwise not)
// << (Left shift)
// >> (Right shift)
// >>> (Unsigned right shift)

// Example:

// Copy code
// let x = 5; // 00000101
// let y = 3; // 00000011
// console.log(x & y); // Output: 00000001
// console.log(x | y); // Output: 00000111
// These are the different types of operators in JavaScript. Understanding how to use them is essential for writing efficient and effective code.
