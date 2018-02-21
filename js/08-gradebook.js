/*eslint-env browser*/

//The application should prompt the user to enter the points for Ursula. Then for Paul. Then for Henry. Then for Tabitha. Finally for Lucy. 
var names = ['Ursula', 'Paul', 'Henry', 'Tabitha', 'Lucy'];
var points = []; //for each one's points
var grades = []; //for each one's drade

var x;
var total = 0;
var average;


//All 5 students and their grades should be displayed within the console window along with the average grade for all 5 students.
window.console.log('Student(s)\tPoints\tGrade');
window.console.log('---------------------------');

for (x in names) {
    //add ponits for each one
    points.push(window.prompt('Enter the points for ' + names[x]));
    var pointX = parseFloat(points[x]);

    //determine the corresponding grade
    if (pointX >= 90 && pointX <= 100) {
        grades.push('A');
    } else if (pointX >= 80 && pointX < 90) {
        grades.push('B');
    } else if (pointX >= 70 && pointX < 80) {
        grades.push('C');
    } else if (pointX >= 60 && pointX < 70) {
        grades.push('D');
    } else {
        grades.push('F');
    }

    //calculate the average points
    total += pointX;
    average = total / points.length;
    window.console.log(names[x] + '\t\t' + points[x] + '\t\t' + grades[x]);
}
window.console.log('---------------------------');
window.console.log('Average Points:\t\t' + average);

//I add Points to simply check the result.
//It works perfectly, though there is a warning message (I don't understand why...)
