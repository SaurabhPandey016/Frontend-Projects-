// What is DOM -> (Document Object Model);
// DOM is a tree structure of objects that represents the HTML page.

// -------------------------------------------------------------
{
    // window object ek sbse bdi entitity hai or iske andr sbkux ata hai
    {
        // ex -> Type on browser console ki window.open(), window.close(), window.console.log() ye sb window k neeche aate;
        // window ke neeche hi DOM hai , BOM hai , JS Core hai Sb Window k child hai Tree like structure me;
    }


    // Document kya hai ? 
    // agr ap apne html code ko js ke object me convert kr rhe hai to isko document kahege;
    // or overall in savko mila ke iskoo DOM ( Document object model kahege);

    // Dom kese bnta hia --> Basically A Tree Like Structure;
    {
        // to html ke andr characters hote hai -> jinke andr tgs hote bhot sare jese head body -> un tags ko 
        //ek tokenizer token me convert krta hai; or wo tokens nodes me convert hojate or bhot sari nodes mil jye to DOM bnati hai;

    }

    // jo bhi Interaction hmare html content k sath hoti hai useh hm DOM me include krte hai;
}




// ========================================================================================



{

    // BOM ( Browser Object Model ) --> To Jo bhi interaction hmare browser k xth ho rhi h leaving the html content 
    // usko hai BOM me Include krlete hai;
    {
        // for example :- 
        // history , screen size , navigations , tabs etc are included in BOM
    } 


}


// ===================================================================================



// Now Codes to Understand ------------------->

{
    // for Example hmne ab bna lia hai apna (html pge) ab agr hme change krna hai html code ko to kese krege? Using Js Ye Seekna h
    // change means -> some logic add, some files or child kuc b add to kese?


    // ----------------------------------------------------------------------------------------------


    // 1. Access Elements / fetch elements -> 

    {
        // using -> 
        // 1. ID(#);
        // 2. ClassName(.);
        // 3. tageName ( p, span h1 & so on);

        // ya to Single elemnt select kr skte access k lye Through (ID);
        // Ya to multiple elements using ClassName or tagName;


        // 1. Methods To Learn; getElement; ispe hm multiple elemets selectt krskte;
        {
            // 1.document.getElementById('#idNme');
            // 2. document.getElementsByTagName('Write tag name like h1, p etc');
            // 3. document.getElementsByClassName('Write class name like .class1, .class2 etc');
        }

        // 2. QuerySelectors ' ispe multiple krne k liye querySelectorAll ka use krna pdega;
        {
            // 1. document.querySelector('#idName');
            // 2. document.querySelector(".ClassName"); means ye us class ke first element ko dega saare ko nhi;
            
            // example {
            
            // By ClassNamee {

                // <div class="fpara">hello bhaoi</div>
                // <div class="fpara">hello 2</div>
                // <div class="fpara">hello 3</div>
                // <div class="fpara">hello 4</div>

                // ab agr isko access krna chaho browser me through query Selector to class ka firdt eelemnt bx fetch hoga hello bhoi wla bx;
                // document.querySelector(".fpara"); single op -> first wla;

                // or agr poori classes chiye to 
                // document.querySelectorAll(".fpara"); ye poora array return krega; is class ka;

            //}
            

            // By Id Name -> 
            {
                // document.querySelector('#idname'); isme b single element hi fetch hoga upr wla
                {/* <div id=​"idname">​hello 5​</div>​ */}


                // if want multiple elements then;
                // document.querySelectorAll("#idname"); use this ye array return krega;

            }


            // By TageName 
            {

                // single]
                // document.querySelector('p');

                // // multiple
                // document.querySelectorAll('p'); return array;

            }
    }



    
    // =======================================================================

    // Updation/
    {
        // 4 ways --> 

        // 1. InnerhTML
        // document.querySelector(".fpara").innerHTML = "hello 5"; // ye innerhT
        // {
                // document.querySelector(".fpara").innerHTML = "hello 5";
                // <div class="fpara">hello 5</div>

            // let name = document.querySelector('.fpara');
            // name.innerHTML = "hello jee kese ho"; -> ye is element k andr wle elemts pe changes lata hai 


            // or ye us element pe Changes lata hai
            // name.outerHTML = "Hello mwere bhaiyo";

            

           

                 


        // }





        // 2. outerHTML  -> HW
        // {

        // }




        // // 3. text-content;
        // {

                // 3. Now understanding Difference between Text content and inner text;
            {

                // To Text content jo jo tmhre actual code me hoga tmhe show krdega;;

                // Jbki Inner text jo render hoke tmhe visible h woi bx show krega;

            }

        // }





        // // 4. innerText;
        // {
                // upr wla dono ka hai;
        // }


    }
    



    // =============================================================================





    // 4. Remove Elements From DOM
    {
        // ways -> 2 find second;
        // 1. removeChild("childName");
        {
            // example 


            let parent = document.querySelector('#mydiv');
            let child = document.querySelector('#fpara');
            parent.removeChild(child);


            // Successfully Removed ; Thats it;
            // 2nd tareeka khud dhund lena;



        }

        // 2. remove bina parent find kiye huye;
        {


            
        }
        



        

    }

// ============================================================================

    //  // 5. Creation of Elements, Adding & Its Positioning;
    //  {
    //     // 1. Creation of Elements; using (createElement)
    //     // let element =  document.createElement("p"); //-> ye p tag ka element create krdega;
    //     // element.textContent = "Or bhai kya chal rha hai ye to textcontent hai na";

    //     // // 2. now adding element into the dom; -> (appendChild)
    //     // document.querySelector(".fpara").appendChild(element); //-> ye element ko fpara me add;

    //     // Now If you want ki Ek Specific Position pe add kro to uske liye;
    //     {
    //         // ek parent element lelo apna usme insertion kro;
    //         // uske neeche upar jese b krna dekh lo;

    //         let parent = document.querySelector('#mydiv');
    //         let element = document.createElement('h2');
    //         element.textContent = "Ye hai Doosri heading";
            
    //         // No we can add this to various position;
    //         // 1. beforebegin; shuru k pehle
    //         // 2. beforeEnd; khtm k phle
    //         // 3. afterbegin shuru k bad
    //         // 4. afterEnd; khtm k bad

    //         // example 
    //         {
    //             parent.insertAdjacentElement("beforebegin", element);
    //         }
            
    //     }

    // }



}

}

    // 





