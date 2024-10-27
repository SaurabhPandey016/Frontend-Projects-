const wordList = ["Frontend-Engineer", "Software-Developer", "Web-designer", "Freelancer" ];
const wordList1 = ["Student", "Web-developer", "Programmer", "Hustler" ];
const spanText = document.querySelector(".text");
const spanText1 = document.querySelector(".text1");

{
  // to sbse pehle hm dekhege ki ek word ko kese type or reverse type krva slte baad me arrays krege;

  function autoType(wordArray, element) {

    let charIndex = 0;
    let forwardType = false;
    let listIndex = 0;
    let skipSpeed = 0;

    const intervalId = setInterval(function () {

        if (listIndex == wordArray.length) {
            listIndex = 0; 
        }
        // clearInterval(intervalId)

        // isse dheema tez ho rha hai
        if(skipSpeed) {
            skipSpeed--;
            return;
        }
        
        const word = wordArray[listIndex];

        // mean if false then do forward;
        if (forwardType == false) {
        
            skipSpeed = 1;
            element.innerText = element.innerText + word[charIndex];
            charIndex++;
            
            
        } else {
            // is code se mai har bar word se 1 item hata k dikha rha hu
            element.innerText = element.innerText.slice(0,element.innerText.length - 1);
            charIndex--;
        }

        if (charIndex == word.length) {
            forwardType = true;
            skipSpeed = 6;
        }

        if (element.innerText.length == 0 && forwardType == true) {

            listIndex++;
            forwardType = false;
        
        }
    }, 70);

  }

  // now we'll call That Function passing the arguments;
  autoType(wordList, spanText);

  // now Creating an Extra element to see if it is working Perfectly;
  autoType(wordList1, spanText1); // done Both are Working You've Made it;; :)


  // now ab iss poore code ko array ke sath krdia

  {

        // ab hme chiye ki jb type ho to slow ho 
        // fir jb poora type hojye to thoda ruke;
        // jb reverse ho to fast ho;

        // ye skip speed se hua 
        // if(skipSpeed)
        // {
        //     skipSpeed --;
        //     return; 
        // }

        // is statemnt se sara kux ho rha hai;

  }
}

// to ab isko ek function me change krna hai jise hm reuse krske; to ek function pe convert krdo; --> done sep 6 24;
