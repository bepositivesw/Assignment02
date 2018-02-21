/*eslint-env browser*/

//Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Marco!" instead of the number and for multiples of 5, print "Polo!" instead of the number. For numbers which are multiples of both 3 and 5 print "Marco! Polo!". 

var n;

for (n = 1; n <= 100; n += 1) {
    if (n % 3 === 0 && n % 5 === 0) {
        window.document.write('Marco! Polo!<br>');
    } else if (n % 3 === 0) {
        window.document.write('Marco!<br>');
    } else if (n % 5 === 0) {
        window.document.write('Polo!<br>');
    } else {
        window.document.write(n + '<br>');
    }
}
