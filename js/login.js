const mail = document.getElementById('mail');
const password = document.getElementById('pwd');
const submit = document.getElementById('login-submit-btn');

submit.addEventListener('click', function() {
    if(mail.value != 'user@babulakter.com') {
        alert('Email you entered is invalid')
    } else if(password.value != 'babul') {
        alert('you have entered a wrong password')
    } else if(mail.value == 'user@babulakter.com' && password.value == 'babul') {
        window.location.href = './html/bank.html'
    }
})