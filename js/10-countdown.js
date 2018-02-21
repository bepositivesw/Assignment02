/*eslint-env browser*/

//Write an application that counts down to 0 based on the number that a user passes into a prompt. 

var n = parseInt(window.prompt('Enter a number'), 10);
var i;
for (i = n; i >= 0; i -= 1) {
    window.document.write(i + '<br>');
}
