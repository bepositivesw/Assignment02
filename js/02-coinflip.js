/*eslint-env browser*/

//1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
var coinFlip = Math.round(Math.random());


//2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
var choice = window.prompt('Enter Head or Tail');
var res = choice.toLowerCase();


//3.	Use a conditional to check the result of the coin flip. If it’s a certain number, it will be heads. If it’s a certain number, it will be tails.
if (coinFlip === 1) {
    window.console.log('Heads: coinFlip = ' + coinFlip);
} else if (coinFlip === 0) {
    window.console.log('Tails: coinFlip = ' + coinFlip);
}


//4~7. compare results and display a message within an alert
//if (coinFlip === 1 && res === 'head') {
//    window.alert('The flip was heads and you chose heads...you win!');
//} else if (coinFlip === 1 && res === 'tail') {
//    window.alert('The flip was heads but you chose tails...you lose!');
//} else if (coinFlip === 0 && res === 'head') {
//    window.alert('The flip was tails but you chose heads...you lose!');
//} else {
//    window.alert('The flip was tails and you chose tails...you win!');
//}




//8.  Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.
if (coinFlip && res === 'head') {
    window.alert('The flip was heads and you chose heads...you win!');
} else if (coinFlip && res === 'tail') {
    window.alert('The flip was heads but you chose tails...you lose!');
} else if (!coinFlip && res === 'head') {
    window.alert('The flip was tails but you chose heads...you lose!');
} else {
    window.alert('The flip was tails and you chose tails...you win!');
}
