'use strict';


alert('Welcome to The Hat Shop!')
let userName = prompt('What is your name?');

if(userName != null) {
    document.write('Hi ' + userName + ', welcome to The Hat Shop!');
} else {
    document.write('Hi, welcome to The Hat Shop!');
}


alert('Please join our mailing list!')
let userEmail = prompt('What is your email?');
if(userEmail != null) {
    document.write(` Thanks for providing your email, we'll be in touch shortly.`);
} else {
    document.write(' No worries about the email, let us know if you change your mind.')
}
