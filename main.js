const form = document.getElementById('Form');
const firstname = document.getElementById('Fname');
const lastname = document.getElementById('Lname');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const error = document.getElementById('sa')
const error2 = document.getElementById('ka')
const error3 = document.getElementById('pa')
const error4 = document.getElementById('va')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fnamevalue = firstname.value;
    const lastnamevalue = lastname.value;
    const emailvalue = email.value;
    const passwordvalue = password.value


    if (fnamevalue === '') {
        error.style.display = 'block'
        firstname.style.borderColor = '#e74c3c'
        firstname.placeholder = ''
    } else {
        error.style.display = 'none'
        firstname.style.borderColor = 'hsl(249, 10%, 26%)'
    };

    if (lastnamevalue === '') {
        error2.style.display = 'block'
        lastname.style.borderColor = '#e74c3c'
        lastname.placeholder = ''
    } else {
        error2.style.display = 'none'
        lastname.style.borderColor = 'hsl(249, 10%, 26%)'
    };

    if (emailvalue === '') {
        error3.style.display = 'block';
        email.style.borderColor = '#e74c3c';
        email.placeholder = 'email@example/com';
        email.classList.add('your-class');
    } else {
        error3.style.display = 'none'
        email.style.borderColor = 'hsl(249, 10%, 26%)'
    }

    if (passwordvalue === '') {
        error4.style.display = 'block';
        password.placeholder = '';
        password.style.borderColor = '#e74c3c';
    } else {
        error4.style.display = 'none'
        password.style.borderColor = 'hsl(249, 10%, 26%)'
    }



})