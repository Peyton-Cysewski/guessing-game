'use strict';

var user = prompt('Hello, what is your name?');

alert('Well ' + user + ', thank you for visitng my website! Let\'s get to know each other!');

var q1 = prompt('Are you from aorund the Seattle area?').toLowerCase();

console.log(q1);

if (q1 == 'y' || q1 == 'yes') {
    alert('Awesome! Me, too! I grew up in Kirkland and still live there.');
} else if (q1 == 'n' || q1 == 'no') {
    alert('Oh ok. Hopefully you like it out here. I have been here my whole life and love the area.');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q2 = prompt('Are you interested in science or tech?').toLowerCase();

console.log(q2);

if (q2 == 'y' || q2 == 'yes') {
    alert('Oh neat! This area has so many cool opportunities to learn and be employed by that field.');
} else if (q2 == 'n' || q2 == 'no') {
    alert('That\'s fine, different strokes for different folks. I like to follow tech channels on YouTube and loosely stay in the know.');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q3 = prompt('Do you like to play any sports?').toLowerCase();

console.log(q3);

if (q3 == 'y' || q3 == 'yes') {
    alert('Same! I am really into rock climbing because it is such a well-rounded sport.');
} else if (q3 == 'n' || q3 == 'no') {
    alert('You should check out rock climbing then! People are really welcoming and it is a remarkably social sport.');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q4 = prompt('Are you a fan of pasta?').toLowerCase();

console.log(q4);

if (q4 == 'y' || q4 == 'yes') {
    alert('It\'s so good isn\'t it?');
} else if (q4 == 'n' || q4 == 'no') {
    alert('Well you should be ' + user + ', it\'s very delicious. Just kidding, but seriously it is really good!');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q5 = prompt('Do you play any video games?').toLowerCase();

console.log(q5);

if (q5 == 'y' || q5 == 'yes') {
    alert('I am a big fan of video games myself!');
} else if (q5 == 'n' || q5 == 'no') {
    alert('I\'ll bet you read more than me then!');
} else {
    alert('Next time respond with y/n or yes/no');
}

alert(user + ', thank you for answering all those questions. I hope you enjoy my website!');