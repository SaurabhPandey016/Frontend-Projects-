


//1. Introduction --> s
//  
{

    // --- set Timeout use hota hai koi code ko kitnw time bad dikhana hai iske liye;
    // --- set Time out me 2 arguments hote hai pehla ek argument jo print krana , 2nd kitne tym baad in miliseconds;
    {

        // example -> 
        
        //1.-->
        // setTimeout('string'); --> agr ye console me chlaoge to VM -> nam ki file bna k error dega;
        // qki ye andr k likhe ko code ki trah treat krta hai; string koi code ni ixliye error;

        // jb b setTimeout cl hoga to VM504:1 esi files me alag xe code likh k use krta h;
        


        //2. --> 
        // ab agr isse kux krvana normal me to ese likho; ->
        // setTimeout('console.log("saurabh");'); // to ab ye barabar print ho rha; this is syntax add colon after
    

        // //3. ab isme time dege ki itne tym me print hojana; use double qoutes
        // setTimeout('console.log("ji gutu ji ");', 5000); // ab isi ko agr multiple lines of code hoga to;


        // //4. Multiple lines of code using BackTicks --> ` isme `; to semicolon ki zrurt nhi hai fir;
        // setTimeout(`console.log("saurabh miya kaha ho")
        
        //     console.log("saurabh jiya kaha ho")
        //     console.log("saurabh kiya kaha ho")
        //     console.log("saurabh liya kaha ho")`,5000);


    }    

}




//2. -> Deep analysis
{



    // ab agr ye code hm yha ni console k udhr likhte hai to ek numbr phle ata fir ye print hota;
    // setTimeout('console.log("ji gutu ji");', 5000); // abi ho rha barabar koi numbr ni h
    

    // ab console me kr rha isi code ko; --> agr console me multiple lines likhni to shift + enter;
    // to ek number b ata hai to iska kya mtlb hai;
    // to isko execution pe (-- 2 --) numbr aata ; -> iskaa mtlb kya hai;

    // setTimeout('console.log("ji gutu ji");', 3000);
    // setTimeout('console.log("ji gutu ji");', 3000);
    // setTimeout('console.log("ji gutu ji");', 3000);

    // jese ye 3 statement pass hai or isme console pe krne pr ek id ayegi jo ki last wale ki hogi;
    // to jo numbr ata wo id hai; 

    // id sbki aati hai setTimeout return krta hai id;
    // usko store krlo to individual ki b krskte ho

    // us Numbr ka use :
    // clearTimeout(number);

    // ye agr daal doge to cancel hojyega timout function;





    // =====================================================================================
    


    // const t1 = setTimeout('console.log("ji gutu ji 1");', 3000);
    // const t2 =setTimeout('console.log("ji gutu ji 2");', 3000);
    
    // clearTimeout(t1);
    // yhi kaam clear interval se b ho rha h pr use mt krna;
    // clearInterval(t2); dont use;

    // ispe function b pss krskte;
    // jb function kroge pass to koi alag xe file ni bnegi;
    
    {

        // note :-> 
        // function a() {
        //     console.log("hello world");
        // }

    
        // // is t3 me setTimeout ki id store hui;
        // const t3 = setTimeout(a, 3000);
    

        // // ab agr a ese likha h to mtlb normal hai;
        // // pr agr a() ese pass kroge to turnt run hojyega;
        // // mtlb function pe jo return value hogi to uth k aajyegi;

        // // woha pe;
        // // to hello world likga to print hogya;
        // // pr return kux ni kr rhe hm to undefined value ayegi; ab kya h thoda confusing h baad me dekhna;
        
        // console.log(t3);


    }




    // Understanding Arguments passed in setTimeout;
    {

        // const t1 = setTimeout('console.log("ji gutu ji 1");', 1000);
        // const t2 =setTimeout('console.log("hi- 2");', 3000);



        // to hmne is third wle me bhot saari chize pass krdi to ab kya hoga
        // const t3 =setTimeout(a, 6000, 'hfgj', 78, 90, 886, [1, 2, 3], {name:'saurabh'});
        // // to isko execute krne ke baad hme xirf hello world print hoke mila;

        // // Javascript me har ek function ke andr ek keyword hota --> ("arguments");
        // {
        //     // ye ek array type me value return krta hia pr array ni hota to iska use krte hai jo oextra chixe access krlega;
        // }

        // function a() {
        //     console.log("hello world");
        //     // console.log(arguments);

        //     // // to ab mai agr object access krna chahu to timer k bad xe 0 indexing chalu krdo or krlo access;
        //     // console.log(arguments[5]); // to ese krskte reference k liye dekh liye


            

        // }

    }




    //4. Jab setTimeOut ka Time 0second set ho to konsa print hoga console wla ya timout even agr wo upr likha h;
    {

        function a() {
            console.log("hello world");
        }

        // Example -> 
        // const t1 = setTimeout('console.log("ji gutu ji 1");', 1000);
        // const t2 = setTimeout('console.log("hi- 2");', 0); // no code or 0 in code;

        // const t3 = setTimeout(a, 6000);
        // console.log('HHidhihdihd'); // to ye neeche likha h and 0s wla code upr konsa print--> ye clg print hoga;

        // why
        {
            // synchronous -> wo jo line by line execute ho;
            // asynchronous -> jo phle kahi store hota fir execute hota 

            // to settimeout -> asynchronous me ata isiliye console wla phle print hoga 0s hai tb bhi;
        }

    }


    // 5. SetInterval --> same hi isi trah ka jese setTimeout;
    {

        // difference is Ye Call hota hi rhega print krta hi  rhega jbtk clear ni kroge;
        // pr setTiomeout 1 bar hi hota;


        const t1 = setInterval(a, 1000);
        clearInterval(t1);

        // baaki aage pdhege project me;
    } 


















}