// JS Code 
let boxes = document.querySelectorAll('.Box');
let rows = document.querySelectorAll('#Row');
let supportArea = document.querySelector('.Support');

let width = window.innerWidth;
let boxWidth = width/2 -50;
if(width < 1160 && width > 900){
    boxes.forEach((box) => {
       box.style.maxWidth = boxWidth + 'px';
    }
)
}

// Main Signup

let inputBox = document.querySelector('#Email');
let signUpButton = document.querySelector('#MainGetStarted');
let boxEmail = document.querySelector('.BoxEmail');
let anchor = document.querySelector('#SignUpa');
signUpButton.onclick = () => {
    if(inputBox.value == ''){
        boxEmail.style.border = '1.4px solid red';
        inputBox.setAttribute('placeholder', 'Please Enter Your Email First');
        anchor.setAttribute('href', '#');
    } else{
        anchor.setAttribute('href', 'https://www.google.com');
    }
}