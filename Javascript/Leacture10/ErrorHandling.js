

// Error Handling in javascript -=----==================================================
{

    // 1. try catch(e) and finally;
    // 2. throw new Error('message');



}

//compile time error ------

//1. syntax error
// console.log(1;


//2. Runtime error

// //Reference error Yaani jb variable declare hi ni hai pr print ke liye bheja gya hai;
// console.log(x);





// ======================================================================================
{

    // Ab Error kya hoga for Example 
    {
        // 1. jb Koi Website pe gye or Wo load ho rha h pr error agya koi to wo 10-15 min xe continue load hoga jb to 
        //    ye bhot ganda user experience hoga.

        // 2. hm kya krege agr hmari website pr 5 sec se jyada loading ho rhi hai to ek msg pop krva dege ki bhai website is slow;
        //    come after sometime.. ixi ko kehte hai error handling; 
    }

}
//=-=====================================================================================






// How to Do Error Handling =-



// try{    // Yaha pe Saara Code Likh Dege or koi agr error hoga to uske liye logic catch pe likege;

//     console.log("try block starts here");
//     //error -> reference error
//     console.log(x); to jese hi error ayega uske neeche ka kux bhi run ni hoga code;
//     console.log("try block ends here")

// }
// catch(err) {
//     //define krte h, error k sath aap kya krna chahte h 
//     //retry logic //fallback mechanism //logging
//     //custom error

//     console.log("I AM INSIDE CATCH BLOCK")
//     console.log("Your error is here: ", err );
// }
// finally{ ye esa type hai ki ye execute hota hi hai;
//     console.log("I will run everytime, as i am finally block")
// }

// =============================================================================



// How to Create Cudtom Error to isko -> (THROW) is Keyword se use krte hai;

//let's create a custom error

    //   (T H R O W )  FOR cREATING cUSTOM eRRORS

{
    // Example 1.
    // try{
    //     //Reference error
    //     console.log(x);
    // }
    // catch(err) {
    //     throw new Error("Bhai pehle declare kro, fer print karna");
    // }

    // Example 2.
    // let errorCode = 100;
    // if(errorCode == 100 ) {
    //     throw new Error("Invalid Json");
    // }


    // Practice
    // try {
    //     console.log(xhh); jb error hoga tbi throw krega ni to compile run hojyga; 
    // }
    // catch(err) {
    //     throw new Error("Abe yaar kya type kr rha hai be tu");
    // }

    // let num = 201;
    // if(num == 201) {
    //     throw new Error("Kya Bhai kya kr rhe ho Declare sahi se kro");
    // }

}






// =============================================================
// Search Govt Eway bill error api Code;