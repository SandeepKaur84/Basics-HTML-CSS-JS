//loops
//1. for loop
//2. while loop
//3. do while loop
//4. for-of loop
//5. for-in loop

//for loop
for(let i = 1; i <= 5; i++){
    console.log(i)
}

//break
for(let i = 1; i <= 5; i++){
    if(i == 3){
        break;
    }
    console.log(i)
}

//continue
for(let i = 1; i <= 5; i++){
    if(i == 4){
        continue;
    }
    console.log(i)
}

//table of 2
for(let j = 1; j <= 10 ; j++){
    console.log(j*2)
}

for(let i = 2; i <= 20; i+=2){
    console.log(i)
}
