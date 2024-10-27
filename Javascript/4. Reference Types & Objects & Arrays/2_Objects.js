


// =============================================================

// What Are Objects in Javascript?? ---------------

// {
//     // It is just a collection of Key-Value Pairs
// }


// -----------------------------------------------------

// Object Creation & Understanding In Deep; (Its Like Map);;
{



    // Syntax;
    let object = {

    //  key  :  Value
        name:"saurabh", 
        sirName:"pandey", 
        age :25, 
        luckyNumber:4, 

        // Now If We Apply Doubled Inverted Comma On Both Sides;
        "full name": 27, 
        "age and luckyNumber" : "25 and 4", 

         // So See If We have Spaces in our keys so we add double inverted comma on both sides;
        //  Now Creating Functions On Objects and Learning to access Outside;

        // Using Function Expression
        distanceWalk : function(a, b)
        {
            return (a + b);
        }, 

        // Using Arrow Function
        getPower: (x, y) => 
        {
            return x ** y;
        }, 

        // Function With No Arguments
        greet:()=> 
        {
            console.log("Hello Mere Bhaiyo Kya Haal Chal");
        }, 


    };
    // console.log(object);
    // console.log(object.distanceWalk(5, 9));
    // // console.log(object.getPower(2, 10));
    // object.greet();  // So You Can Acces Objects Child Through Dot Operator;


    // console.log(typeof(object.getPower())); // If You want to know type of function just say greet, getPower
    // console.log(typeof(object["full name"])); // if want to know andr k elements ka type add getPower() <-- and greet()<--;



    // ===============================================================================================

    // What if --> ------------------------------------------
    {
        // let obj2 = object;
        // console.log(obj2);

        // ye likhne se obj2 naam ka ek pointer bna hoga stack memory me jo same object ki memory ko heap me point kr rha
        // Qki esa krne se shallow copy bnti, yaani same memory, not deep copy ki dusra object bnega 
        // same object bx ab obj2 bhi usiko point kr rha

    }

    // Homework ki Perform Shallow Copy and Deep copy in Js;------------->

    // -----------------------------------------------------------------------------------------


    




}

