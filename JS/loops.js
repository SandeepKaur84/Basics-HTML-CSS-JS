//loops
//1. for loop
//2. while loop
//3. do while loop
//4. for-of loop
//5. for-in loop

//for loop
// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

//break
// for(let i = 1; i <= 5; i++){
//     if(i == 3){
//         break;
//     }
//     console.log(i)
// }

//continue
// for(let i = 1; i <= 5; i++){
//     if(i == 4){
//         continue;
//     }
//     console.log(i)
// }

//table of 2
// for(let j = 1; j <= 10 ; j++){
//     console.log(j*2)
// }

// for(let i = 2; i <= 20; i+=2){
//     console.log(i)
// }

// for(let i = 5; i>=1 ; i--) {
//     console.log(i)
// }

//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while loop
let i = 1;
while (i <= 5) {
  console.log("Using while loop :", i);
  i++;
}

//do while loop
let j = 1;
do {
  console.log("Using do-while loop :", j);
  j++;
} while (j <= 5);

//Non primitive - array, objects , functions
//array - collection of elements
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
console.log(arr[2]); //third
console.log(arr[0]); //first
console.log(arr[arr.length - 2]); //second last
console.log(arr);

//simple for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for-of -> array + strings
//for-of loop
for (let k of arr) {
  console.log("Using for of loop : ", k);
}

let fruits = ["apple", "mango"];
for (let el of fruits) {
  console.log(el);
}

//string
let name = "abc";
for (let p of name) {
  console.log(p);
}

//object - key-value pairs
let obj = {
  name: "abc",
  age: 20,
};

console.log(obj.age);
console.log(obj["name"]);
console.log(obj);

for (let i in obj) {
  console.log(i);
  console.log(obj[i]);
}
