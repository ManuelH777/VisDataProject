
let names = document.getElementById("name");
let userImg = document.getElementById("userImg");
let email = document.getElementById("email");
let pw = document.getElementById("pw");
let dob = document.getElementById("dob");
let add = document.getElementById("add");
let num = document.getElementById("num");

let userButton = document.getElementById("btn");


function nextUser(){
    let randomNum = Math.floor(Math.random() * data.length);
    let selectedData = data[randomNum];
    console.log(selectedData);
    names.innerText = `${selectedData.name[1]} - ${selectedData.name[2]}`;


}

userButton.addEventListener("click", nextUser);
