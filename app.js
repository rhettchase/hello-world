'use strict';

alert('Welcome to The Hat Shop!')

function getName() {
    let userName = prompt('What is your name?');
    return userName;
}


function greetUser(name) {
    while(name == null || name == ""){
        name = prompt('Please provide your name for a customized experience');
    }

    if (name == null || name == ""){
        document.write('Hi, welcome to The Hat Shop!');
    } else {
        document.write('Hi ' + name + ', welcome to The Hat Shop!');
    }   
}

function getEmail() {
    let userEmail = prompt('Please join our mailing list! What is your email?');
    return userEmail;
}

function specialMessage(email) {
    if(email == null || email == "") {
        email = prompt('Please provide your email so we can stay in touch');
    }
    if(email == null || email == "") {
        document.write(` Please consider joining our mailing list!`);
    } else {
        document.write(` Thanks for providing your email, we'll be in touch shortly`)
    }
}

function howManyHats() {
    let num = prompt('How many hats do you want to see (1-5)?');

    for(let i = 0; i < num; i++) {
        document.write("<img src='fedora.jpeg' alt='fedoras for everyone!' >")
        document.write(`<p>Hat number ${i + 1}</p>`)
    }
}





// if (window.confirm(`Do you really like hats? Click 'OK' for yes and 'Cancel' for no`)) {
//     alert(`Then you're in the right place!`);
// } else {
//     window.open("https://www.google.com/", "Thanks for visiting!");
// }