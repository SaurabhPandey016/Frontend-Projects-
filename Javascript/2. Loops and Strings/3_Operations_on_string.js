// 1. concatenation; 

// let op1 = "english ";
// let op2 = "Hindi ";

// // let ans = op1 + op2;
// // console.log(ans);

// Concatenate using tilda sign
// let str1 = `saurabh `;
// let str2 = `pandey `;

// // // ye dollar waa not working baki normal wale working
// // let ans =  '${str1}  ${str2}';
// // let ans = str1 + str2; // working
// console.log(ans);

// =======================================================================================
// Important Keyword --> (\) Iska use krke apan koi b special character ki speciality Normal lr skte Examples-> 

// ab ispe mai chahta ki andr k double quote bhi print ho to jo abi ni hoge error de rha;
// let str = "saurabh "pandey"";

// Now see We can easily print Double Quotes; or anything special;
// let str = "saurabh \"pandey\"";
// console.log(str);

// example 2;
// let str = "\saurabh \pandey";
// console.log(str);


// ==========================================================================================
// 2. substring

// let str1 = "Saurabh";

// // Tareeka 1
// // console.log(str1.substring(2));

// // tareeka 2
//                     //       not incuded
// console.log(str1.substring(2, 8));


// // 3. length

//     let op1 = "EngLIsh";
//     console.log(op1.length);
    

// // ==============================================================================================
// // 4. uppercase

//     console.log(op1.toUpperCase());

// // 5. lowercase

// console.log(op1.toLowerCase());

// =======================================================================================================
// 6. charAt();
// 7. indexof 

// 8. Split Method; ==================================================================================
// 9. Same With Join bx write str.join('+');

// Example;
// let str = "My name,  is saurabh,  pandey hai,   ,   ,  mera naam";
// let words = str.split(',');
// console.log(words);

// Example 2;

// Now I Want to Seperate Items (\) iske basis pr to error aya;
// let str = "My name,  is saurabh,  pandey hai,   ,   ,  mera naam";
// let words = str.split('\');

// To For Doing This; Har jgh Do bar ek iski speciality khtm krdega or duxra Split kra dega (\) Iske basis pe;
// let str = "\\My \\name,  \\is saurabh,  \\pandey hai, \\  ,   ,  \\mera naam";
// let words = str.split('\\');
// console.log(words);

// To ye alag alag hoke array me store hogye; or Print hogye;

