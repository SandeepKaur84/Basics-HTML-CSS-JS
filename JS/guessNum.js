let num = Math.floor(Math.random() * 10) + 1;
let guess;
guess = Number(prompt("ENTER A NUM BETWEEN 1-10"));
while (true) {
  if (guess > num) {
    guess = Number(prompt("Enter something lower"));
  } else if (guess < num) {
    guess = Number(prompt("Enter something higher"));
  } else {
    alert("Congratulations. You won");
    console.log(guess);
    break;
  }
}

// let num2 = Math.random(); //0-1
// num2 = num2 * 10;
// num2 = Math.floor(num2);
// num2 = num2 + 1;

// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random)