/*eslint-env browser*/

//Write an application that prompts the user for two items: a noun and a number. The application should then evaluate the entries and write out into the browser window the number and pluralized form.

var str = window.prompt('What is your favorite animal?');
var n = Number(window.prompt('Enter a positive integer'));


// patterns for plual rules
var pat1 = /sheep|fish|deer/i;
var pat2 = /s$|ss$|sh$|ch$|x$|z$/i; //eg:fox
var pat3 = /f$|fe$/i; //eg:wolf
var pat4 = /ay$|ey$|iy$|oy$|uy$/i; //eg:monkey
var pat5 = /y$/i; //eg:fly
var pat6 = /ao$|eo$|io$|oo$|uo$/i; //eg:kangaroo
var pat7 = /o$/i; //eg:buffalo
var pat8 = /oo/i; //eg:goose

var strPl; //plural of noun


// get correct pluralized form
if (n === 1) {
    window.document.write(n + ' ' + str);
} else {
    if (str.match(pat1)) {
        window.document.write(n + ' ' + str);
    } else if (str.match(pat2)) {
        window.document.write(n + ' ' + str + 'es');
    } else if (str.match(pat3)) {
        strPl = str.replace(pat3, 'ves');
        window.document.write(n + ' ' + strPl);
    } else if (str.match(pat4) || str.match(pat6)) {
        window.document.write(n + ' ' + str + 's');
    } else if (str.match(pat5)) {
        strPl = str.replace(pat5, 'ies');
        window.document.write(n + ' ' + strPl);
    } else if (str.match(pat7)) {
        window.document.write(n + ' ' + str + 'es');
    } else if (str.match(pat8)) {
        strPl = str.replace(pat8, 'ee');
        window.document.write(n + ' ' + strPl);
    } else {
        window.document.write(n + ' ' + str + 's');
    }
}
