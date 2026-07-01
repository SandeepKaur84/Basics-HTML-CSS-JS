//function definition
function fun1() {
  //work
  console.log("Helloo");
  console.log("Hi");
  console.log("Namaste");
}
//function call
fun1();
fun1();

//parameters
function sum(a, b, c) {
  console.log(a + b + c);
}

//arguments
sum(5, 6, 70);
sum(8, 7, 9);

//default parameters
function callMe(name = "User") {
  console.log("Hellooo" + " " + name);
}

callMe("Sandeep");
callMe();
callMe("ABC");
callMe();


function square(n) {
    // console.log(n * n);
    return n * n;
}

// console.log(square(5))
let res = square(7);
console.log(res)

//arrow functions-1
let sum2 = ((a , b) => {
  console.log(a + b);
  return a + b;
})

//arrow function-2
let sum3 = ((a , b) => a + b);

//arrow function-3
let sq2 = (n => n * n);

// way-1
console.log(sum2(5, 10))

//way-2
let res2 = sum2(5,10);
console.log(res2);