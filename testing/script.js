let email = document.getElementById('email');
let password = document.getElementById('password');
let submitBtn = document.getElementById('signinBtn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
   const userId = uuidv4();
   console.log('Generated User ID:', userId);
})