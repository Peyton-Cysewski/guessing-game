'use strict';

var totalScore = 0;
var user = prompt('Hello, what is your name?');

alert('Well ' + user + ', thank you for visitng my website! Let\'s get to know each other!');

var q1 = prompt('Are you from aorund the Seattle area?').toLowerCase();

console.log(q1);

if (q1 == 'y' || q1 == 'yes') {
    alert('Awesome! Me, too! I grew up in Kirkland and still live there.');
    totalScore += 1;
} else if (q1 == 'n' || q1 == 'no') {
    alert('Oh ok. Hopefully you like it out here. I have been here my whole life and love the area.');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q2 = prompt('Are you interested in science or tech?').toLowerCase();

console.log(q2);

if (q2 == 'y' || q2 == 'yes') {
    alert('Oh neat! This area has so many cool opportunities to learn and be employed by that field.');
    totalScore += 1;
} else if (q2 == 'n' || q2 == 'no') {
    alert('That\'s fine, different strokes for different folks. I like to follow tech channels on YouTube and loosely stay in the know.');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q3 = prompt('Do you like to play any sports?').toLowerCase();

console.log(q3);

if (q3 == 'y' || q3 == 'yes') {
    alert('Same! I am really into rock climbing because it is such a well-rounded sport.');
    totalScore += 1;
} else if (q3 == 'n' || q3 == 'no') {
    alert('You should check out rock climbing then! People are really welcoming and it is a remarkably social sport.');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q4 = prompt('Are you a fan of pasta?').toLowerCase();

console.log(q4);

if (q4 == 'y' || q4 == 'yes') {
    alert('It\'s so good isn\'t it?');
    totalScore += 1;
} else if (q4 == 'n' || q4 == 'no') {
    alert('Well you should be ' + user + ', it\'s very delicious. Just kidding, but seriously it is really good!');
} else {
    alert('Next time respond with y/n or yes/no');
}

var q5 = prompt('Do you play any video games?').toLowerCase();

console.log(q5);

if (q5 == 'y' || q5 == 'yes') {
    alert('I am a big fan of video games myself!');
    totalScore += 1;
} else if (q5 == 'n' || q5 == 'no') {
    alert('I\'ll bet you read more than me then!');
} else {
    alert('Next time respond with y/n or yes/no');
}

alert(user + ', thank you for answering all those questions. I hope you enjoy my website!');

var myAge = 22;

for (i = 0; i < 4; i++) {
    if (i == 0) {
        var q6 = Number(prompt('How old am I?'));
    } else if ( i == 1 || i == 2) {
        q6 = Number(prompt('Guess again, you have ' + (4 - i) + ' tries left.'));
    } else {
        q6 = Number(prompt('Guess again, you have ONE LAST TRY!!!'));
    }

    if (q6 == myAge) {
        alert('Correct!')
        totalScore += 1;
        break;
    } else if (q6 > myAge) {
        alert('Too High.')
    } else if (q6 < myAge) {
        alert('Too Low.')
    } else {
        alert('Age is just a number, but it IS a NUMBER!')
    }

    if (i == 3) {
        alert('You tried to guess and failed. I am 22.')
    }
}

var states = ['Alaska', 'Washington', 'Oregon', 'California', 'Hawaii']
var q7 = null;

for (var i = 0; i < 6; i++) {

    var found = false;

    if (i == 0) {
        q7 = (prompt('What is a State that touches the Pacific Ocean?'));
    } else if ( i > 0 && i < 5) {
        q7 = (prompt('Guess again, you have ' + (6 - i) + ' tries left.'));
    } else {
        q7 = (prompt('Guess again, this is your LAST TRY!!!'));
    }

    for (var j = 0; j < states.length; j++) {
        if (states[j].toLowerCase() == q7.toLowerCase()) {
            found = true;
            console.log(found);
            break;
        } 
    }
    
    if (found) {
        alert('Yes, good job!');
        totalScore += 1;
        break;
    }

    if (i == 5) {
        alert('These were the possible correct answers: ' + states[0] + ', ' + states[1] + ', ' + states[2] + ', ' + states[3] + ', and ' + states[4] + '.');
    }
}

alert('Your total score from the questions is ' + totalScore + ' out of 7.');