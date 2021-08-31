document.getElementById('login-btn').addEventListener('click',function(){
// get email
const emailField = document.getElementById('user-email');
const userEmail = emailField.value;
// get password
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;

if(userEmail == 'bank@gmail.com' && userPassword =='django'){
    window.location.href = 'banking.html';
}
})