function sayHelloo() {
    alert("Helloo to user.")
}

let btn = document.getElementById("btn1");
// btn.onclick = function() {
//     alert("4th btn was clicked")
//     console.log("bvhwbi")
// }

// btn.onclick = function() {
//     alert("bbeiubiu")
// }

btn.addEventListener("click" , () => {
    alert("Helloo")
})

btn.addEventListener("click" , () => {
    console.log("Hi")
    alert("hi")
})

let loginBtn = document.getElementById("login");
let regBtn = document.getElementById("register");

loginBtn.ondblclick = function() {
    alert("Login btn was clicked")
}

loginBtn.addEventListener("dblclick" , () => {
    console.log("Login clicked")
})

regBtn.addEventListener("mouseenter" , () => {
    alert("Mouse was entered")
})
