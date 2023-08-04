const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log("Estamos bien")
    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Nombre de usuario no puede estar en blanco')
    }else{
        console.log(username)
        setSuccessFor(username)
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email no puede estar en blanco')
    }else{
        setSuccessFor(email)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Email no puede estar en blanco')
    }else{
        setSuccessFor(password)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password no puede estar en blanco')
    }else{
        setSuccessFor(password)
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Password 2 no puede estar en blanco')
    }else{
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
}