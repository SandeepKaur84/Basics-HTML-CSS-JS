//if-else statements
let age = prompt("Enter your age : ");
if(age >= 18) {
    console.log("Eligble")
} else{
console.log("Not eligible")
}

//Ternary operator
let res = (age >= 18 ? "Eligible" : "Not eligible");
console.log(res);

//nested if-else
if(condition) {
    if(condition) {
        if(condition) {

        } else {

        }
    } else {

    }
} else {

}

//if-else if - else
//marks > 90 - A grade
//marks > 80 , < 90 - B grade
//marks > 70 , < 80 - C Grade
//marks > 60 , < 70 - D grade
//marks < 60 - Fail

let marks = prompt("Enter your marks");
if(marks >= 90 ){
    console.log("A Grade");
} else if (marks >= 80 && marks < 90) {
    console.log("B grade")
} else if (marks >= 70 && marks < 80) {
    console.log("C grade");
} else if(marks >= 60 && marks < 70) {
    console.log("D grade")
} else {
    console.log("FAILED")
}

//switch statement
let day = 5;
switch(day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    default: 
        console.log("No case matched");
}