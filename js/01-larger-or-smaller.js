/*eslint-env browser*/

//Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.


var num1 = Number(window.prompt('Enter an integer'));
var num2 = Number(window.prompt('Enter another integer'));

if (num1 > num2) {
    window.document.write('The larger number is ' + num1 + '.');
} else if (num1 < num2) {
    window.document.write('The larger number is ' + num2 + '.');
} else {
    window.alert('Please enter different integers!');
}
