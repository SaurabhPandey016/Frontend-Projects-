

// Feature 3
// using local Storage to store the state of dark and ligh mode;
// object




// Feature 1 
// for whole page Dark Mode;

    const bodyTag = document.querySelector('body');
    const checkBox1 = document.querySelector('#checkbox1');
    const thirdTag = document.querySelector('.third-content');
    const checkBox2 = document.querySelector('#checkbox2');


    // feeature 4
    // when i freshly opened my page;
    // review the state through local storage and get the results;

    const objDark = JSON.parse(localStorage.getItem('objDark')) || {

        first: {
            completed: false
        },
    
        second: {
            completed:false
        }
    };
    
    localStorage.setItem('objDark', JSON.stringify(objDark));
    
    
    if(objDark.first && objDark.first.completed) {
        bodyTag.classList.add('dark');
        checkBox1.checked = true;
    }

    if(objDark.second && objDark.second.completed) {
        thirdTag.classList.add('dark');
        checkBox2.checked = true;
    }

    checkBox1.addEventListener('change', function() {

        if(checkBox1.checked) {
            bodyTag.classList.add('dark');
            objDark.first.completed = true;
            objDark.second.completed = true;
        }
        else {
            bodyTag.classList.remove('dark');
            objDark.first.completed = false;
            objDark.second.completed = false;
        }

        if(checkBox1.checked) {
            checkBox2.checked = true;
            thirdTag.classList.add('dark');
        }
        else {
            thirdTag.classList.remove('dark');
            checkBox2.checked = false;
        }

        localStorage.setItem('objDark', JSON.stringify(objDark));
    });


// Feature 2 
// For Only a Specifc container Dark/light Mode;

    checkBox2.addEventListener('change', function() {

        
        if(checkBox2.checked)
        {
            thirdTag.classList.add('dark');
            objDark.second.completed = true;
        }
        else 
        {
            thirdTag.classList.remove('dark');
            objDark.second.completed = false;
        }
        
        
        localStorage.setItem('objDark', JSON.stringify(objDark));
    });



    
    







