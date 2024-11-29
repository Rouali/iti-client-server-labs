//"use strict" -> must use var
console.log("This is the External JavaScript file");
/* numbers */
//console.log("number1 before definition line",number1);
/**WHAT IF you remove var keyword from number1 definition
and repeat the previous 3 steps , does the result change? 
number1 = 3; there is no errors if the print statment after declaration  
*/
var number1 = 3;
console.log("number1 before definition line", number1);
let number2 = 2.9;
const number3 = 0xff;
/** Try to change the value of number1, number2 or number 3 on
developer tool console? What will happen???
number1 and number2 will change 
number3 will give you error */

/* strings */
var firstName = "rawan";
var middleName = 'ali';
var lastName = `rawan ali ezzat`;
firstName[3] = 'b';
console.log(firstName);//will not change
/* boolean */
var flag = true;
/*types of */
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);
console.log(typeof flag);
/* operator , loops, conditionds */
let number = 5;
if (number % 2 == 0) {
    console.log("number is even");
} else {
    console.log("number is odd");
}

for (let i = 1; i <= 10; i++) {
    console.log(`number ${i} = ${i}`);
}

if (number < 0) {
    console.log("number is negative");
} else if (number > 0) {
    console.log("number is positive");
} else {
    console.log("number = 0");
}
let num = 10;
for (let i = 0; i <= num; i++) {
    console.log(`${num}*${i} = `, i * num);
}

let day = 6;
switch (day) {
    case 1:
        console.log("1 -> Sunday");
        break;
    case 2:
        console.log("2 -> Monday");
        break;
    case 3:
        console.log("3 -> Tuesday");
        break;
    case 4:
        console.log("4 -> Wednesday");
        break;
    case 5:
        console.log("5 -> Thursday");
        break;
    case 6:
        console.log("6 -> Friday");
        break;
    case 7:
        console.log("7 -> Saturday");
        break;
}

if (day == 6) {
    console.log("this is weekend");
} else {
    console.log("this is weekday");
}
/** ToString : 16 hexa 2 binary 8 oct*/
let Number = 30;
console.log(Number.toString(16));
