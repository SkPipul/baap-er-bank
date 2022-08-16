document.getElementById('btn-enter').addEventListener('click', function(){
    const emailField = document.getElementById('email-input');
    const email = emailField.value; 

    const passwordField = document.getElementById('password-input');
    const password = passwordField.value;
    
    if(email === 'skjabed252@gmail.com' && password === 'sk392636'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Please enter a valid email or password')
    }
})