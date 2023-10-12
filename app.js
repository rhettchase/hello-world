'use strict';

alert('Welcome to The Hat Shop!')

function getName() {
    let userName = prompt('What is your name?');
    return userName;
}


function greetUser(name) {
    if(name == null){
        prompt('Please provide your name for a customized experience');
    }
    if (name == null){
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
    if(email == null) {
        prompt('Please provide your email so we can stay in touch');
    }
    if(email !== null) {
        document.write(` Thanks for providing your email, we'll be in touch shortly.`);
    } else {
        document.write(` Please consider joining our mailing list!`)
    }
}




// if (userName != null) {
//     document.write('Hi ' + userName + ', welcome to The Hat Shop!');
// } else {
//     document.write('Hi, welcome to The Hat Shop!');
// }


// alert('Please join our mailing list!')
// let userEmail = prompt('What is your email?');
// if (userEmail != null) {
//     document.write(` Thanks for providing your email, we'll be in touch shortly.`);
// } else {
//     document.write(' No worries about the email, let us know if you change your mind.')
// }

// if (window.confirm(`Do you really like hats? Click 'OK' for yes and 'Cancel' for no`)) {
//     alert(`Then you're in the right place!`);
// } else {
//     window.open("https://www.google.com/", "Thanks for visiting!");
// }