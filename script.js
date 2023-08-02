let loginButton = document.getElementById('login');
let signupButton = document.getElementById('signup');

loginButton.addEventListener('click',(event) => {
  event.stopPropagation();
  location.href = './login';
})

signupButton.addEventListener('click',(event) => {
    event.stopPropagation();
    location.href = './signup';
})