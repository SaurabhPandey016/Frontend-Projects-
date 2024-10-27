
// what is Hoisting?
//  Ek Aisa process hai Jo;
// Hmari variable declaration hai Jo (Var) Keyword ka use hoke bni hoti Or Jo Function declaration hai usko
// Ye Top Of the Scope Shift KrDeta hai  

// Examples

// 1. Function Hoisting ========================================================================================




// first Declaration then call -----------------------------

// let getname = (fullName) => {
//     console.log(fullName);
// }

// getname("saurabh");





// To Jese hm dekh rhe h phle function bna fir call gyi to chal rha h pr agar ulta hojye to 
// call phle jaye or function bad me rhe to kya chlega?






// First Call then Declaration --------------------


// getname("saurabh");

// // ye function chal rha h pr;
// function getname(fullName) {
//     console.log(fullName);
// }

// let getname = (fullName) => { ye Arrow function ni hoga execute
//     console.log(fullName);
// }



// ======================================================================================================

// 2. Variable Hoisting (Var) --> 

// First Intitialize then call -----------------------------------------------
// {

//     var name = "saurabh";
//     console.log(name);

// }





// First call then initialize
// {
//     console.log(name);
//     var name = "saurabh";
    

// }

// To esi Hoisting jo hoti hai var k xth uxme sirf variable ka type jo hai upar cha jata baki value nhi;


// ========================================================================================================


// let or const ke andr nahi hota hai ye blkl b access nii kr paoge 




