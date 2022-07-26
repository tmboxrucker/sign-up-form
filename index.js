const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const username = document.getElementById('username');
const email = document.getElementById('email');

password.onkeyup = function() {
    var spanClass = 'password';
    if (password.validity.valid == true) {
        password.style.outline = 'green solid 1px';
        document.getElementsByClassName(spanClass)[0].style.color = '';
    }
    else {
        password.style.outline = '';
    }
}

confirmPassword.onkeyup = function() {
    var spanClass = 'confirm-password';
    if (password.value == confirmPassword.value && password.validity.valid == true) {
        confirmPassword.style.outline = 'green solid 1px';
        document.getElementsByClassName(spanClass)[0].style.color = '';
    }
    else {
        confirmPassword.title = "Passwords don't match";
        confirmPassword.pattern = password.value;
        console.log('in fail');
        confirmPassword.style.outline = '';
    }
}

username.onkeyup = function() {
    var spanClass = 'username';
    if (username.validity.valid == true) {
        username.style.outline = 'green solid 1px';
        document.getElementsByClassName(spanClass)[0].style.color = '';
    }
    else {
        username.style.outline = '';
    }
}

email.onkeyup = function() {
    var spanClass = 'email';
    if (email.validity.valid == true) {
        email.style.outline = 'green solid 1px';
        document.getElementsByClassName(spanClass)[0].style.color = '';
    }
    else {
        email.style.outline = '';
    }
}

function removeOutline(e) {
    var spanClass = e.id;
    if (e.validity.valid != true) {
        e.style.outline = 'maroon 1px solid';
        console.log(e);
        document.getElementsByClassName(spanClass)[0].style.color = 'maroon';
    }
}
