

// Local Storage ko Dekhne k liye console me likho;

// localStorage; ya window.localStorage; same results;

{

    // ab tmhe agar get krni hai kux value local storage me;
    
    // <input type="text" name="" id="" class="input-field" />

    // example 1'

    // const inputName = document.querySelector('.input-field');
    // const nameText = document.querySelector('.name-tag');


    // get item ko ek ix trah se krege
    // nameElement.innerText = localStorage.myname;

    // ab best practice dekho;
    // nameElement.innerText = localStorage.getItem('myname'); // same work;

    
    // // // ab hm kya krege ek event listener lgayegfe jb b input text me kux likha jyega wo local storage me save ho jyega;
    // inputText.addEventListener('input', function(e){ // to ek ye tareeka hogya
    //     console.log(e.target.value);
    //     // localStorage.myname = e.target.value; ye b working

    //     localStorage.setItem('myname', e.target.value);
    //     // nameElement.innerText = localStorage.myname;;
    //     nameElement.innerText = localStorage.getItem('myname') // same kaam pr sahi tareeka;
        
    //     // localStorage.myval = e.target.value;
    //     // inputText.innerText = localStorage.myval;
    // });



    //2..--->



    // now get item and set item in local stporage dekhna hai;
    // or ek or criteria khud se practice kro to give age from local storage;
    {

        // Select the field you want to change or do something;
        // let ageText = document.querySelector('.span2');
        // let ageInput = document.querySelector('.input2');

        // first task is to manipulate span2 tag;
  
        // Now we've to learn setItem;
        // localStorage.setItem('myAge', 1234);
        // textArea.innerText = localStorage.getItem('myAge');

        // ageInput.addEventListener('input', function(event) {
        //     // console.log(event.target.value);
        //     localStorage.setItem('myAge', event.target.value);
        //     textArea.innerText = localStorage.getItem('myAge');
        // });

    }




    

    // 3. --> Now We'll Create Bigger Objects
            // and will store it on Local Storage;
    {

        const nameInput = document.querySelector('.input-field');
        const nameText = document.querySelector('.name-tag');

        const ageText = document.querySelector('.span2');
        const ageInput = document.querySelector('.input2');
        // Const likne se bahr isko koi b override ni kr pyega;;

        // 1. Creation of objects and store it on local storage;
        {

            // to ab dekho ye ek object hai or local storage me jo store
            // wo ek string array me to string ko object me convert k liye;
            // JSON.parse use hota ab dekgo kese;


            const myData = JSON.parse(localStorage.getItem('myData')) || {};
             // to iska mtlb hua tki age phle se pda hai to dede parse krke 
            // ni to ek empty obect dede;
            // or yha se ye sikhne ko mila ki 
            // agr object created b ni hai to js dynamically create krletii hai saari chixein;



            // if(myData.name) // agr ye commented hota to undefined ata isiliye;
            nameText.innerText = myData.name;

            if(myData.age)
            ageText.innerText = myData.age;

           

            // 2. ab mai input ko is object me store krauga
            // or jo input ayega usko local storage me;

            // Ab input name hai to wo name object me store hojye;
            // age wla age me hojye;
            // or baki dono me get krke shwo kra do website pe;

            nameInput.addEventListener('input', function(event) {
                myData.name = event.target.value;
                
                // appearing on screen but as an object;
                // nameText.innerText = localStorage.getItem('myData');

                // Now Convert Object to string to store on localstorage;
                // JSON.stringify(myData);
                localStorage.setItem('myData', JSON.stringify(myData));

                // now how to get this item and use it;
                // is trah krne pe poora jese hai udhr vesa show hoga;
                // nameText.innerText = localStorage.getItem('myData');

                // to ab hmne string ko daal dia local storage me;
                // access isse krskte ki local storage me jake fetch kro;
                // ya to e.target se krlo to abi yhi krte hai fir dekhte hai aage;

                // or isme object se value utha li gyi;
                nameText.innerText = myData.name;

            });

            ageInput.addEventListener('input', function(event) {
                myData.age = event.target.value;
            
                localStorage.setItem('myData', JSON.stringify(myData));

                // isme yhi value di gyi hai;
                ageText.innerText = event.target.value;

            });

            // ye code chal to rhe hai pr jese hi reload krta hu hatt jata h rehta hai local
            // storage pe pr show ni hota to mhe kux krna hoga;
            {

                // to yha pe fault ye thi ki jb reload ho rha tha to hm fetch krke 
                // update ni kr rhe the isliye hatt ja rha tha; .. fixed

            }

            // jese hi page reload ho phle to mai local storage se data fetch kru ni to
            /// ek empty object pass krdu agr empty hai to;



            // now ab project complete krege
            
        }


    }
    




}