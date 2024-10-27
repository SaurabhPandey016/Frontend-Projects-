// Click fires after Full Action Occurs
// Mousedown -> button is pressed
// mouseUp -> button is released
// mouseEnter -> Moved onto an element
// mouseLeave -> moved out of an element


// Now Task ->
{
    //1. when we click both mouseup and down takes place;
    // 1. when me mousedown -> say down
    // 2. mouseUp-> say up;
    // 3. mouseEnter -> make h2 class blue;
    // 4. mouseLeave -> make h2 class greeen;
    // 5. mouseOver -> make h2 class red;
}

// 1. 
{
    // let m1 = document.querySelector('.btn');
    // m1.addEventListener('mousedown', function() {
    //     console.log('down');
    // });

    // 2. 
    // let m2 = document.querySelector('.btn');
    // m2.addEventListener('mouseup', function() {
    //     console.log('Up');
    // });

    // 3.
    let heading = document.querySelector('#fpara');
    heading.addEventListener('mouseenter', function() {
        console.log('Mouse Enter');
        
            heading.classList.add('blue');
        
        
        // heading.classList.add('blue');
    });

    // 4. 
    let heading1 = document.querySelector('#fpara');
    heading1.addEventListener('mouseleave', function() {
        // if(heading.classList.conatains('red')) {
        //     heading.classList.remove('red');
        // }
        // else 
        // {
        //     heading.classList.add('red');
        // }
        // heading1.classList.add('yellow');
        heading.classList.remove('blue');
    });
    //5.
    // let m5 = document.querySelector('#fpara');
    // m3.addEventListener('mouseover', function() {
    //     // if(m5.classList.conatains('yellow')) {
    //     //     m4.classList.remove('yellow');
    //     // }
    //     // else {
    //     //     m4.classList.add('yellow');
    //     // }

    //     m5.classList.add('green');
    // });
}
// Done--->>>.