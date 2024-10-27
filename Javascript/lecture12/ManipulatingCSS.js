// We Manipulate css through javascript we Learn thid and move on 
{

    // (YHA PE --> (INLINE STYLES) ->  KI BAAT HPO RHI HAI OK)

    //  1. (Single Element) ko Select krke uski Style ki Get/Set Krskte (.style ka use krke;) --> Example;
    {

        // Now what I want is ki tm pehle get krna seekho
        {
            // 1. Get Second Para element first and Print it in Console;
            // let paraElement = document.querySelector("#spara");
            // // console.log(paraElement); ye sirf browser pe hoga

            // paraElement.style.backgroundColor = 'red'; // So this statement changes one property at a time;
            // paraElement.style.border = '5px solid white'; // See change property one by one with this but;

            // is There Anything Jo Ek bar me Sb Change krde? --->>>

        }


    }

    // 2. Select And Manipulate Multiple Elements in One Go;
    {

        // Using (cssText) property;
        {

            // Example
            // let spara = document.querySelector('#spara');
            // spara.style.cssText = "background-color: black; color:white; padding:3rem;"
            // So here You can change Multiple Properties in one go;
        }


    }


    // 3. set Attribute se kisi b attribute ko pkd ke changes krskte add krke skte kuc b;
                        
    {

        // Use (setAttribute('class', 'fClass'));
        // iska mtlb hua class add krde or naam rkh de fClass;
        {


            // Example -> 
            // let element = document.querySelector('#fdiv');
            // // console.log(element) ; Ye Browser k console me print hota hai;
            // // Now Set as class is elemet pr;;

            // // jaake dekh lo abi tk koi class ni h fdiv me ab daal rha class;
            // element.setAttribute('class', 'fClass');

            // // To dekh skte ho ki class agyi h usme; ye changes browser k me dikhege'
            // // ab agr ek id or dedu isi ko to kya hoga;
            // element.setAttribute('id', 'pehlaDiv');

            // // to yha se hmne code dala or fdiv gayab Update hogya pehlaDiv naam se;
            // to ye hmne comment kia to firse browser k updated changes hat gye;

            // To Ye Set Attribute jo b add krega phle sb jo pehle se h usko 
            // replace krke add krega remember <---

            // Example;
            {
                // let el = document.querySelector("#fPara");

                // // No hme fpara ki style me changes krke dekhte hai jo yha daaloge
                // // Wohi bx set hoga baki hatt jyega
                // // Ye sirf 1 parameter hi set krskta --> multiples pe kaam ni krega
                // el.setAttribute('style', 'background-color: white');
            }


        }




    }


    // 4. (.className) -> Isse ap khud ki class ya multiple claases insert krskte elements pe;
    {
        // Example; ->  >>> 
        // let el = document.querySelector('#fpara');
        
        // // ye get wala kaam krega
        // el.className;

        // // Or ye Set Wala;
        // el.className = 'goku vegeta gohan kuririn';

    }

    // 5. (.classList) -> Isse array k format me classes get krskte;
    {

        // Functionalities;
        {
            // 1. add a class
            // 2. remove a class;
            // 3. toggle a class -> Mean ki agr hogi to del hojyegi or ni hogi to set hojyegi;
            // 4. .Contains -> Isse check krskte class Present yaa absent -> true false retun krta;
            // and Much more;
        }

        // Example;--> 
        {
            // let ele = document.querySelector('#fpara');

            // // ye get wala part
            // // console.log(element);

            // // ye browser pe chlega
            // // ele.classList;

            // // 1. -> add;
            
            //     // Ek baar me 1 hi argument lega ye fourth daloge ni chlega
            //     ele.classList.add('thirdClass');
            //     ele.classList.remove('thirdClass');

            //     // ye toggle add kia ni tha tb
            //     ele.classList.toggle('thirdClass');

            //     // or ye toggle remove krdia
            //     ele.classList.toggle('thirdClass');
            //     ele.classList.contains('thirdClass'); // return false in browser console;
            
        }

    }








}