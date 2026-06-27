//loops
//1. for loop
//2. while loop
//3. do while loop
//4. for-of loop
//5. for-in loop

for (let i = 1; i <= 5; i = i + 2) {
  console.log("Using for loop:", i);
}

for (let i = 5; i >= 1; i = i - 3) {
  console.log(i);
}

let i = 5;
while (i >= 1) {
  console.log("Using while loop: ", i);
  i--;
}

let j = 5;
do {
  console.log("Using do-while:", j);
  j--;
} while (j >= 1);

//Non primitive - array , object, functions
//for-of loop - arrays + strings
//for-in loop - objects

let arr = ["apple", "mango", "banana"];
console.log(arr[0]);
console.log(arr[3]);
console.log("Length: ", arr.length);

//for of loop on arrays
for (let i of arr) {
  console.log(i);
}

//simple for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for of on strings
let name = "abcd";
for (let i of name) {
  console.log(i);
}

//for-in loop
//object - key, value pairs
let obj1 = {
  name: "abc",
  age: 20,
  marks: 35,
  course: "BCA",
};
console.log(obj1); //whole object
console.log(obj1.name); //single value
console.log(obj1.course);

for (let i in obj1) {
  console.log(i , "=" , obj1[i]); //keys
  console.log(obj1[i]); //values
}
