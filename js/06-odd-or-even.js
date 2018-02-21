/*eslint-env browser*/

//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

var i;
for (i = 0; i <= 15; i += 1) {
    if (i % 2 === 0) {
        window.console.log(i + ' is even');
    } else {
        window.console.log(i + ' is odd');
    }
}


//However, (as major in Math) I don't think that zero is even or odd...as similar as that zero is neither a negative or a positive number.
