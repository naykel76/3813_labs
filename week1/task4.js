"use strict"

console.log({"prompt": "^1.3.0"});

let prompt = require('prompt');

// Start the prompt
prompt.start();

// Get two properties from the user: username and email
prompt.get(['val1', 'val2'], function (err, result) {

    if (isNaN(result.val1) || isNaN(result.val2)) {
        console.log('Invalid input. Please enter numeric values.');
    } else {
        const val1 = parseInt(result.val1);
        const val2 = parseInt(result.val2);
        const sum = val1 + val2;
        console.log('Sum of numbers is: ' + sum);
    }
});


