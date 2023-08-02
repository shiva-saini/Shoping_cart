let signupButton = document.getElementById('signupBtn');
let fnameInput = document.getElementById('fname');
let lnameInput = document.getElementById('lname');
let emailInput = document.getElementById('email')
let userIdInput = document.getElementById('userId')
let passwordInput = document.getElementById('password')
let errorDiv = document.getElementById('error');
let tokenDiv = document.getElementById('token')
let logoutButton = document.getElementById('logoutBtn')
let userArray= JSON.parse(localStorage.getItem('users'));
let userToken = localStorage.getItem('token');
let myCartButton = document.getElementById('mycart');
let profileButton = document.getElementById('profile');
let loginButton = document.getElementById('login');
let navSignupButton = document.getElementById('signup');
let homeButton = document.getElementById('home');
let edit_button = document.getElementById('edit-button');

// edit password related buttons

let oldEmail = document.getElementById('oldEmail');
let oldPassword = document.getElementById('oldPassword');
let newPassword = document.getElementById('newPassword');
let confirmPassword = document.getElementById('confirmPassword');


homeButton.addEventListener('click',(event) => {
   event.stopPropagation();
   location.href='../home'
})
// loginButton.addEventListener('click',(event) => {
//     event.stopPropagation();
//     location.href = '../login';
// })

// navSignupButton.addEventListener('click',(event) => {
//     event.stopPropagation();
//     location.href = '../signup';
// })


edit_button.addEventListener('click',(event) => {
    event.preventDefault();
    let userId = oldEmail.value + "*" + oldPassword.value;
    console.log('user id is',userId)
    let users = JSON.parse(localStorage.getItem('users'));
    let currUser; // here we will find user itself so that after removing the item from cart will be able to samve updated user in users array
    let updatedUserArray = users.filter(user => {
        return user.id !== userId;
    })
    users.forEach(user => {
        if(user.id === userId){
            currUser = user;
        }
    })
    console.log('user is',currUser)
    let newUserId = oldEmail.value + "*" + newPassword.value;

    currUser.password=newPassword.value;
    currUser.id=newUserId;
    updatedUserArray.push(currUser);
    localStorage.setItem('loggedInUser',newUserId);
    localStorage.setItem('signedUpUser',newUserId);
    localStorage.setItem('users',JSON.stringify(updatedUserArray));
    alert('Password updated successfully!')
    showCurrentDetails();
})


myCartButton.addEventListener('click',(event) => {
    event.stopPropagation();
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn == 'true'){
      location.href='../mycart';
    }else{
      alert('You are not loggedin!');
      location.href='../login'
    }
})


function showCurrentDetails() {
  let userArray = JSON.parse(localStorage.getItem('users'));
  let userId = localStorage.getItem('loggedInUser');
  userArray.forEach(obj => {
    if(obj.id == userId){
       console.log(obj.token)
       fnameInput.innerText = obj.first_name;
       lnameInput.innerText = obj.last_name;
       emailInput.innerText = obj.email;
       passwordInput.innerText = obj.password;
       tokenDiv.innerText = obj.token;
       userIdInput.innerText=obj.id;
    } 
 });
}

showCurrentDetails();


logoutButton.addEventListener('click',(event) =>{
     event.preventDefault();
     let currentUserToken = tokenDiv.innerText;
     console.log(currentUserToken);
     let userArray= JSON.parse(localStorage.getItem('users'));
     updatedArray = userArray.filter(obj => {
       return  obj.token !== currentUserToken
     })
     localStorage.setItem('users',JSON.stringify(updatedArray));
     localStorage.removeItem('token');
     localStorage.removeItem('signedUpUser');
     localStorage.removeItem('loggedInUser');
     localStorage.setItem('isLoggedIn','false');
    location.href = '../'
})




function isLoggedIn() {
    let userToken = localStorage.getItem('token');
    if(userToken){
        return true;
    }
    return false; // Change this to 'true' if the user is logged in
}

function redirectToLogin() {
    window.location.href = "login.html";
}

function initProfilePage() {
    if (!isLoggedIn()) {
      redirectToLogin();
    }
}
document.addEventListener("DOMContentLoaded", initProfilePage);