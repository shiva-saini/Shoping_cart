let signupButton = document.getElementById('signupBtn');
let fnameInput = document.getElementById('fname');
let lnameInput = document.getElementById('lname');
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let confirm_passowrd_Input = document.getElementById('confirm-password');
let errorDiv = document.getElementById('error');
let loginButton = document.getElementById('login');
let navSignupButton = document.getElementById('signup');





let homeButton = document.getElementById('home');

homeButton.addEventListener('click',(event) => {
   event.stopPropagation();
   location.href='../'
})


loginButton.addEventListener('click',(event) => {
    event.stopPropagation();
    location.href = '../login';
})

navSignupButton.addEventListener('click',(event) => {
    event.stopPropagation();
    location.href = '../signup';
})

signupButton.addEventListener('click', (event) => {
     event.preventDefault();
     let first_name = fnameInput.value;
     let last_name = lnameInput.value;
     let email = emailInput.value;
     let password = passwordInput.value;
     let confirm_password = confirm_passowrd_Input.value;

     if(last_name.trim() === '' || first_name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm_password.trim() === ''){
        errorDiv.innerText = "Error : All fields are mendatory!";
        errorDiv.style.display = 'flex'
        return;
     }else{
        let userArray = JSON.parse(localStorage.getItem('users'));
        if(userArray){
            let id = email + "*" + password;
            if(checkUserAlreadyExists(id)){
                errorDiv.innerText = 'Account already exists! Please login';
                errorDiv.style.display = 'flex'
                location.href = '../login'
            }else{
                let token = generateToken(16);
                let userObj = {
                    first_name:first_name,
                    last_name:last_name,
                    email:email,
                    password:password,
                    token:token,
                    userCart:[],
                    id:id
                }
                localStorage.setItem('token',token);
                localStorage.setItem('signedUpUser',id);
                userArray.push(userObj);
                localStorage.setItem('users',JSON.stringify(userArray));
                location.href = '../login'
            }
           
        }else{
            let id = email + "*" + password;
            userArray = [];
            let token = generateToken(16);
            let userObj = {
                first_name:first_name,
                last_name:last_name,
                email:email,
                password:password,
                token:token,
                userCart:[],
                id:id
            }
            localStorage.setItem('token',token);
            localStorage.setItem('signedUpUser',id);
            userArray.push(userObj);
            localStorage.setItem('users',JSON.stringify(userArray));
            location.href = '../login'
        }
     }
})


function checkUserAlreadyExists(userId){
    let userArray = JSON.parse(localStorage.getItem('users'));
    if(userArray){
        userArray.forEach(user => {
            if(user.id === userId){
                return true;
            }
        })
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
