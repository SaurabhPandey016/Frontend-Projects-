


// 1. Learning Abot events;

{

    // Browser Events -> kya hote hai
    {
        // 1. events ;
        // 2. respond kes krta hai event;
        // 3. data store kese hota isme
        // 4. Stop kese kr skte events ko;'
        // 5. Event ki Lifecycle kese hoti saaari chizein;

    }




    //1 . Event kya hota hai? 
    {
        //  It is Just an announcement; 
        // Mean 
        {
            // Kisi chix pe click kia event hogya
            // scroll kia event hogya 
            // mtlb browser k sath interaction krna event hogya;

            // Examples of Events 
            {
                // scroll
                // click
                // double click
                // key press
                // inxb ko events kehte hai




                
                // 1. Event target 
                {
                    // Event Target wo hote jaha se event shuru hojata hai 
                    // example 
                    {
                        // Dekho jese ek button hai submit wali ab usko click kruga to submit hojyga
                        // to submit button event target hogya

                        // Or uske Peeche ka Jitna b logic likha hoga wo Event listener me Likha hoga
                        // Ab Event listenerr kya hota aage-->>>
                    }
                }



                // 2. Event Listener 
                {





                    // Maan lo Hm dekhna Chahte hai Kxi Website pe ki kon Konse Events Present hai
                    {
                        // To Ek to Event listeners me dikh jyega inspect pe;



                        // or ek Tareeka --> 
                        {
                            // moniterEvents(document);
                            // ab website pe click kro saare dikh jyege



                            // ab agr ni dekhna hai bnd krna chahte to 
                            {
                                // unmoniterEvents(document);
                                // ab click kroge kuc b nhi aayega

                            }
                        }

                    }


                }






                // 3. There ar two things For Event Listeners
                {

                    // Jese Koi Element hai --> addEventListener(); --> add krskte event 
                    // removeEventListener() --> isse remove b krskte;\

                    // Syntax ---> 
                    {
                        // <eventTarget>.addEventListener(<event-type>, <function-> action>); --> essa kux hoga;

                    }


                    // Ek or hota h --> dispatchEventListener() --> syd iske baare me ni pdh rhe; filhaal

                }
                

            }
        }


    }


    //    --> Code -----> 


    // 2. Now Ap Practical Code se Understand krege --> 

    {

        // Dekho Ek function bnaya hmne;bta k bs khtm;
        // Ab is function ko pass krdege event ka type use krna hai;

        // yhi optimal tareeka hai event listener k andr agr bnaoge to 
        // wo sahi nhi hoga yo hai yhi h isiko ache se 
        // function changeText() 
        // {
        //     let event = document.querySelector('#fpara');
        //     event.textContent = "Saurabh Pandey Jindabaad";
        // }
        
        // let event = document.querySelector('#fpara');
        // // event.textContent = "saurabh"; //-> change ho rha hai;
        // event.addEventListener('click', changeText); //-> Working

        

        // // ---->> >>> >>> >>> >>> >>> >>> >>> >>> >>> 
        // // Now Remove Event Listener
        // {
        //     event.removeEventListener('click', changeText); // Ab Work ni Krega hatt gya hai ye
        // }  Ese me remove hojata hai

        

        /// Example ek or  ---> ki us tareeke me Remove ni kr paoge 
        // Qki jo object pass hua hoga same object pass hoga tbi remove krega
        //  Example -> 
        {

            // function changeText() 
            // {
            //     let event = document.querySelector('#fpara');
            //     event.textContent = "Saurabh Pandey Jindabaad";
            // }


            
            // let event = document.querySelector('#fpara');
            // // event.textContent = "saurabh"; //-> change ho rha hai;
            // event.addEventListener('click', function() 
            // {
            //     let event = document.querySelector('#fpara');
            //     event.textContent = "Saurabh Pandey Jindabaad";
            // }); //-> Working

            

            // // ---->> >>> >>> >>> >>> >>> >>> >>> >>> >>> 
            // // Now Remove Event Listener
            // {


            //     event.removeEventListener('click', function() 
            //     {
            //         let event = document.querySelector('#fpara');
            //         event.textContent = "Saurabh Pandey Jindabaad";
            //     }); // Ab Work ni Krega hatt gya hai ye
            // }



            // to iss tarah Krne Me Dekho Remove ni hua abi b click kroge to chlta hai;
            // Qki Dono Function Alag object me ajate hai;
            // Same hoge tbi remove hoga isiliye 
            // hm Alag se function bnate hai or uska naam paas krte hai
            
            

        }





        // 2. Phases Of Events 
        {

            // There are three phases;
            {
                // 1. capturing phase;
                // 2. at Target Phase
                // 3. Bubbling Phase;
            }

            // Example 
            {

                // <div>
                //     <article>
                //         <h1>

                //         </h1>
                //         <p>

                //         </p>
                //     </article>

                // </div>

                // is type ka code likha hai jo ek Hierarchy follow krta hai jese 
                {
                    // div parent -> child -> artcile
                    // Yaani div ka 1 child hai article

                    // Now article ke 2 child hai -> h1 & p
                    
                    // Now Note :- About Phases
                    {
                        // to root element hai div
                        // yha se gya article pe;
                        // fir gya p tag pe;

                        // maan lo p tag me hi event listener lga h;
                        // 
                        {
                            // to root xe target tak phochne ki hm -> 1. Capturing Phase kehte hai;
                            // jb target pe phoch jaye to use --> 2. At target phase.. kehre hai

                            // or jb at target se root pe wpis hoge to useh --> 3. Bubbling Phase bolege;
                        }
                    }
                }
            }


            // Now thode or deep smjhte hai;
            {

                // To By Default jb hm addEventListener Lgate hai to wo -> Bubbling Phase me ho rha hota hai;
                
                // Ab agr maan lo isko bubbling pe change krna hai to
                {   
                    // ek value hoti hai useCapture value -> isko true pass krna hota hai bx;
                    // Yaani saara kuc wohi pr bx third parameter lga dena uspe true bhej dena to capturing phase hojyega


                    // Example 
                    {

                        // function changeText() 
                        // {
                        //     let event = document.querySelector('#fpara');
                        //     event.textContent = "Saurabh Pandey Jindabaad";
                        // }
                        
                        // let event = document.querySelector('#fpara');
                        // // event.textContent = "saurabh"; //-> change ho rha hai;
                        // event.addEventListener('click', changeText, true); //-> Working on Capturing Phase;

                    }

                    // Note:-  Target phase apply ni ho skta hai kbi b


                }

            }
        }

        // 3. Event Objects 
        {

            // Agr mai Events ke andr se information niklna chahu to kese nikal skte wo dekhege hm ab --> 
            {

                // to jb b koi event trigger hota hai means
                // jb click hua to wo event ka objct bn k sbse pehle -> isme as an argument pass hota hai--> addEventListener(event);

                {
                    // to hme ab agr dekhn ahai kesa kya event hai to wo b dekh skte hai;;
                    // Example
                    {
                        // function changeText(eve) 
                        // {
                        //     console.log(eve); // to ab mai event jo hai use print kra rha hu
                        //     // to event hai kis typ ka? yha pe click type ka ab console dekho jaakew
                        //     let event = document.querySelector('#fpara');
                        //     event.textContent = "Saurabh Pandey Jindabaad";
                        // }
                        
                        // let event = document.querySelector('#fpara');
                        // event.addEventListener('click', changeText);
                        // event.textContent = "saurabh"; //-> change ho rha hai;


                    }

                }

            }


        }



        // 4. Default action --> 
                // iska mtlb ki har tag ka koi default action hota hai na;
                // jese anchor tag ka default hai link pe lejana;
                // to kya hm default action change kr skte hai kisi ka  --> Haa


        {   

            
            // let anchorElement = document.querySelector('#katala');

            // // Chahe event yha pe pass kro ya ni qki by default ata hi hai;
            // // tmhe bx event. krke likh dena hai and done;

            // // without passing event -> dono working
            // anchorElement.addEventListener('click', function() {
            //     event.preventDefault();
            //     anchorElement.textContent = "click hogya hai bhai";
            // });

            // // with event
            // anchorElement.addEventListener('click', function(event) {
            //     event.preventDefault();
            //     anchorElement.textContent = "click hogya hai bhai";
            // });


        }



        // 5. Avoiding to many Event Listeners 

        // mtlb agr ek listener pe kru to bhot saare na bne ek pe hi call ho jise speed optimal rhe website ki;
        // or agr esa hai ki 4 para hai or unsb ke andr span tag lge hai to sorf span pe click ho tbi call ho listener ye kese sb dekehege;

        {

            // now ab mai chahta hu ki agr koi b paragraph click ho to uspe ek alert aye ki bhaiya click kiye or para ka naam
            {

                // to saare para's ko phle fetch krege
                let paragraphs = document.querySelectorAll('p'); // Sleector all se saare aagye

                //Example Brutforce --> 
                {
                    // for(let i = 0; i<paragraphs.length; i++) {
                    //     let paras = paragraphs[i];

                    //     // isme kya hota paragraph block scope hai to uske scope pe;
                    //     // jaha b click hoga ye alert ayega;
                    //     // to isme hmne har ek para k liye ek listener lgya; 

                    //     // pr ye optimal ni hai; ab;
                    //     paras.addEventListener('click', function(event) {
                    //         alert("are bhai click hogya hai paragraph " + (i+1));
                    //     });
                    // }
                }

                

                // Example --> Optimal;
                {
                    // let para = document.querySelectorAll('p');
                    

                    // // Isme 1 hi function bnaya or wo pass krdia isme; -> 
                    // function clickEvent(event) {

                    //     // ab yha pe swal ye hai ki pata kese chlega ki konsa para click hua hai;
                    //     // to uske liye event.target ka use krke pata krege;
        
                    //     // ab yha pe mai chahta hu ki first span pe click kru tbi bs event call ho 
                    //     // to kese hoga ye --> nodeName ek chix hoti usse see-> 

                    //     // agr if condition ni hoti or span pe click hota to sirf span ta textContnt show hota;
                    //     // jb p pe click hoga to poore ka sho hoga;

                    //     if(event.target.nodeName === 'SPAN')
                    //         alert("are bhai click hogya hai " + event.target.textContent);
                    // }

                    // for(let i = 0; i<paragraphs.length; i++) {
                    //         let paras = paragraphs[i];
    
                    //         // isme kya hota paragraph block scope hai to uske scope pe;
                    //         // jaha b click hoga ye alert ayega;
                    //         // to isme hmne har ek para k liye ek listener lgya; 
    
                    //         // pr ye optimal ni hai; ab;
                    //         paras.addEventListener('click', clickEvent);
                    //     }
                }


                // Best Optimal rhega ki poore div me hi lga do ye; lekin div me kahi b click hoga to wprk krega
                {

                    // function clickEvent(event) {

                    //     alert("click hogya bhai -> " + event.target.textContent);

                    // }

                    // let mydiv = document.querySelector('.wrapper');
                    // mydiv.addEventListener('click', clickEvent);

                    // Isme div pe click hoga poora dikhayega saare elemnt;
                    // para pe hoga para ke element;
                    // span pe hoga span ke element 
                    // optimal hai pr pta ni use agbi;
                }


                // HomeWork -> 
                {

                    // ye pata krna hai 
                    {
                        // DOMContentLoaded 
                        // is event ka use krke pata lgana hai kese use kr skta dynmically script kese add kru;
                        // ye kya hota hai sb jaanna baad me;

                        // or agr inspect pe jaake network pe jaake jb reload kroge to dikhega ki dom content loaded in miliseconds
                        // to yhi dekhna pta krmna;
                    }


                }


            }




        }


        











    }




}

