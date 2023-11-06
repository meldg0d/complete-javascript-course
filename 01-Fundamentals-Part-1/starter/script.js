/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
//console.log(typeof true);
//console.log(typeof "yes");


javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log("year is " + typeof year);

console.log(typeof null);

*/

/*
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);


if (ageJonas >= ageSarah) {
    console.log(ageJonas + " is larger than " + ageSarah)   
}
*/

/*
const massMark = 78;
const heightMark = 169;

let BMIMark = massMark / (heightMark * heightMark);

console.log(BMIMark);

const massJohn = 92;
const heightJohn = 195;

let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(typeof markHigherBMI);

*/

/*
const firstName = 'Jonas';
const nameString = `I'm ${firstName}`;

console.log(nameString)

console.log(`This is possible 
with template
and not with ""`);
*/
/*
const inputYear = "1992";
console.log(Number(inputYear));
console.log(inputYear + 10);
console.log(Number(inputYear) + 10);

if(inputYear !== Number){
    console.log("This is not a number")
}

const favourite = Number(prompt("Whats your number?"))
console.log(favourite)

*/

let day = "Monday".toLowerCase();


switch (day) {
    case "monday":
        console.log("It's monday")
        break;
    case "Sunday":
        console.log("It's Sunday")
        break;    

    default:
        console.log("it's another day")
        break;
}