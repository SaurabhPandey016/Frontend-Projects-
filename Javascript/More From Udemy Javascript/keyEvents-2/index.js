// keypress -> keyis Pressed
// keydown -> key is down
// keyup -> key is released


//1.
const nameInput = document.querySelector('.input');
// nameInput.addEventListener('keypress', function() {

//     console.log(' key is pressed -> ' + nameInput.value)
// }); -> done

//2.
// nameInput.addEventListener('keydown', function() {

//     console.log(' key is down -> ')
// });

//3.
nameInput.addEventListener('keyup', function() {

    console.log(' key is up -> ') // When you release the key it'll fire;
});

// done