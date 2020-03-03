'use strict';

var user = prompt('Hello, what is your name?');

alert('Well ' + user + ', thank you for visitng my website!');

var q1 = prompt('Do you like ice cream?').toLowerCase();

console.log(q1);

if (q1 == 'y' || q1 == 'yes') {
    alert('Thank you for your response!');
} else if (q1 == 'n' || q1 == 'no') {
    alert('Thank you for your response!');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q2 = prompt('Are you interested in tech?').toLowerCase();

console.log(q2);

if (q2 == 'y' || q2 == 'yes') {
    alert('Thank you for your response!');
} else if (q2 == 'n' || q2 == 'no') {
    alert('Thank you for your response!');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q3 = prompt('Do you like to play any sports?').toLowerCase();

console.log(q3);

if (q3 == 'y' || q3 == 'yes') {
    alert('Thank you for your response!');
} else if (q3 == 'n' || q3 == 'no') {
    alert('Thank you for your response!');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q4 = prompt('Is Washington your home state?').toLowerCase();

console.log(q4);

if (q4 == 'y' || q4 == 'yes') {
    alert('Thank you for your response!');
} else if (q4 == 'n' || q4 == 'no') {
    alert('Thank you for your response!');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q5 = prompt('Do you play any video games?').toLowerCase();

console.log(q5);

if (q5 == 'y' || q5 == 'yes') {
    alert('Thank you for your response!');
} else if (q5 == 'n' || q5 == 'no') {
    alert('Thank you for your response!');
} else {
    alert('Next time respond with y/n or yes/no');
}

alert(user + ', thank you for answering all those questions. I hope you enjoy my website!');