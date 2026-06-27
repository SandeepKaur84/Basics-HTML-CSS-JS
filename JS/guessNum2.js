// let num = 54;
let num = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;
guess = Number(prompt("Enter a number between 1-100"));
while (true) {
  if (guess > num) {
    guess = Number(prompt("Enter lower number"));
    attempts++;
  } else if (guess < num) {
    guess = Number(prompt("Enter a higher number"));
    attempts++
  } else {
    alert(`Congratulations. You won in ${attempts} attemptss `);
    break;
  }
}

// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num = num + 1;
// let num = Math.floor(Math.random() * 100) + 1;
// console.log(num)

