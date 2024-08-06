// Step 1: Declare a variable named 'age' of type 'number' and assign a value to it.
let age: number = 25;
console.log(age);


// Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'.
for (let i = 1; i <= age; i++) {
    console.log(i);
}

// Step 3: Use an 'if-else' statement to check if 'age' is greater than 18.
if (age > 18) {
    console.log('Age is greater than 18.');
} else {
    console.log('Age is 18 or less.');
}

// Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.
let score: number = 0;
console.log(score);

// Step 5: Use an 'if' statement to check if 'score' has a value.
if (score !== 0) {
    console.log('Score is available.');
}

// Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
if (score) {
    console.log('Score is evaluated as truthy.');
} else {
    console.log('Score is evaluated as falsy.');
}

// Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).
let username: string = '';

// Step 8: Use an 'if' statement to check if 'username' has a value.
if (username) {
    console.log('Username is available.');
}

// Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
if (username) {
    console.log('Username is evaluated as truthy.');
} else {
    console.log('Username is evaluated as falsy.');
}

// Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.
let isAdmin: boolean = false;

// Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
if (isAdmin) {
    console.log('isAdmin is evaluated as truthy.');
} else {
    console.log('isAdmin is evaluated as falsy.');
}

// Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
if (!isAdmin) {
    console.log('isAdmin is false.');
}