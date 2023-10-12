'use strict';

alert('Welcome to The Hat Shop!')

function getName() {
    let userName = prompt('What is your name?');
    return userName;
}


function greetUser(name) {
    if(name == null || name == ""){
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
    if(email !== null || email !== "") {
        document.write(` Thanks for providing your email, we'll be in touch shortly.`);
    } else {
        document.write(` Please consider joining our mailing list!`)
    }
}





// if (window.confirm(`Do you really like hats? Click 'OK' for yes and 'Cancel' for no`)) {
//     alert(`Then you're in the right place!`);
// } else {
//     window.open("https://www.google.com/", "Thanks for visiting!");
// }