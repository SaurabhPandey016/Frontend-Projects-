// How To WriteFunctions in Javascript;

// Case 1 ========================= Basic Syntax
// {
//         // function functionName( parameters1, parameters2 or no parameters)
//         // {
//              // Perform tasks here

//         // } // curly Braces Thats it;

    // Examples -> Without Parameters
    // function printName()
    // {
    //     console.log("saurabh pandey");
    // }
    // printName();

    // // and so on; with parametrers
    // function kuchBhi( a, b)
    // {
    //     console.log(a + b);
    // }
    // kuchBhi(3, 5);

    // Examples With Return statement; ===============================================
    // function printSum(x, y)
    // {
    //     return x + y;
    // }

    // let sum = printSum(9, 13);
    // console.log(sum);


// }

// =========================================================================================================

    // Case 2---> Duxra Tareeka --> (Function Expression)
    //{
        // before;
        // function print()
        // {
        //     console.log("saurabh pandey");
        // }

        // print();

        // // After
        // let solve = function(a, b, c)
        // {
        //     return a + b + c;
        // }

        // Before
        // function squareNumber(num)
        // {
        //     return num**2;
        // }
        // let ans = squareNumber(8);
        // console.log(ans);


        // After
        // let squareNumber = function(num)
        // {
        //     return num**2;
        // }
        // let ans = squareNumber(8);
        // console.log(ans);

    //}

// =======================================================================================================

// Case 3 --> Third Tareeka ( arrow functions)
// {
        // 1. Normal
        // function getPow(x, y)
        // {
        //     return x**y;
        // }
        // let ans = getPow(2, 10);
        // console.log(ans); // Working

        // 2. Function Expression
        // let getPow = function(x, y)
        // {
        //     return x**y;
        // }
        // let ans = getPow(2, 10);
        // console.log(ans);

        // 3. Arrow Function
        // let getPow = (x, y) => // Just This Sign
        // {
        //     return x**y;
        // }
        // let ans = getPow(2, 10);
        // console.log(ans);

        // // Arrow Functions
        // let getMultipy = (a, b) =>
        // {
        //     return a * b;
        // }
        // let ans1 = getMultipy(9, 15);
        // console.log(ans1);

        // Just Remove Function and Add arrow To The Function;
        
// }



