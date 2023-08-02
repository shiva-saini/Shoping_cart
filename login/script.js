let signinButton = document.getElementById('signinBtn');
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let errorDiv = document.getElementById('error');
let loginButton = document.getElementById('login');
let navSignupButton = document.getElementById('signup');
let homeButton = document.getElementById('home');



homeButton.addEventListener('click',(event) => {
   event.stopPropagation();
   location.href='../'
})

// this is the button inside my header
loginButton.addEventListener('click',(event) => {
    event.stopPropagation();
    location.href = '../login';
})

navSignupButton.addEventListener('click',(event) => {
    event.stopPropagation();
    location.href = '../signup';
})



// this is the button inside my form
signinButton.addEventListener('click', (event) => {
     event.preventDefault();
     let email = emailInput.value;
     let password = passwordInput.value;

     if(email.trim() === '' || password.trim() === ''){
        errorDiv.innerText = "Error : All fields are mendatory!";
        errorDiv.style.display = 'flex'
        return;
     }else{
        let userId = email + "*" + password;
        let userArray = JSON.parse(localStorage.getItem('users'));
        if(userArray){
            let check = checkUserAlreadyExists(userId);
            if(check){
                localStorage.setItem('isLoggedIn','true');
                localStorage.setItem('loggedInUser',userId);
                alert('congrats! you are gonna logged in');
                location.href='../profile';
                return;
            }else{
                alert('You dont have already account! Please create account first')
                location.href = '../signup';
            }
           
        }else{
            alert('You dont have already account! Please create account first')
            location.href = '../signup';
        }
     }
})


function checkUserAlreadyExists(userId){
    let userArray = JSON.parse(localStorage.getItem('users'));
    if(userArray){
        let f = false;
        userArray.forEach(user => {
            if(user.id === userId){
                f = true;
                return;
            }
        })
        return f;
    }
    return false;
}




function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
  }
