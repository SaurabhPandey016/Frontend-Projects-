



// ================================================================
{

    // 1. Object Cloning In Javascript;
    {
        // ===============================================================


        // Objects are dynamic in Nature
        // How to know this ? Hum iseh Runtime pe Change Kr skte hai; For Example'


        // let obj = {
        //     name: "Rahul",
        //     age: 20,
        //     gender: "male", 

        // };

        // let obj2 = obj;

        // // To isse kya hua hoga ki refernce create hua hoga obj2 or wo obj2, obj ko point kr rha hoga to copy duxri create ni hui;
        // // usi copy pe duxra pointer point kr rha;

        // // for example

        // obj.age = 50;
        // console.log(obj);

        // // to hmne runtime pe value change ki to dono objects pr value reflect hogi;
        // console.log(obj2);




        // =================================================================================

        


        // To ab hm Objects ko clone krefe jisse koi refernce create na ho poora object hi alag bne 1 me changes kre to duxre me change na ho;
        
        // Learning 3 ways to Clone an Object
        {
            // 1. Spread operator (...)
            // let obj2 = {...obj};

            // console.log(obj);
            // console.log(obj2);

        
            // obj.age = 50;
            // obj2.name = "saurabh";

            // console.log(obj);
            // console.log(obj2);


            // -----------------------------------

            // 2. Assign Opertaor;
            // let obj3 = Object.assign({}, obj);

            // console.log(obj);
            // console.log(obj3);

            // obj3.age = 50;
            // obj3.name = "saurabh";

            // console.log(obj);
            // console.log(obj3);   


            // ======================================================================================================================


            // ye 2 hogye ek or hota h iteration ke dwara ki har obj pe iterate kro or value assign kro pr ispe dikkt ye hogi ki nested jab objects hoge to dikkat ayegi;


            // 3. Iteration Method
            // let obj4 = {};
            // for (let key in obj) {

            //     console.log(key);
            // }

            // for (let key in obj) {

            //     let value = key;
            //     let keyValue = obj[key];
            //     obj4[value] = keyValue;
            // }

            // // console.log(obj);
            // // console.log(obj4);

            // // Changing values of obj4;
            // obj4.name = "saurabh pandey";
            // console.log(obj);
            // console.log(obj4);
            

        }


    }


    // =============================================================================================
    

    // Garbage Collection In Javascript
    {
        // hmara ispe control ni hai na hm isko kux kr skte hai;n ye ek tool hota inside javascript jo unused memory ko clean krta hai apne ap;
        // jese c++ me heap memory allocate krate hai to useh hme manually delete clean krna pdta hai;
        // pr javascript me esa nhi hota ye khudse work krta hia;

    }



}