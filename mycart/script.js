
let products_div = document.getElementById('products');
// let myCartArray = JSON.parse(localStorage.getItem('cartItems'));
let price_details_div = document.getElementById('price-details');
let profileButton = document.getElementById('profile');
let homeButton = document.getElementById('home');
// let cartCheckOut = document.getElementById('cart-checkout');



homeButton.addEventListener('click',(event) => {
   event.stopPropagation();
   location.href='../home'
})

// console.log(myCartArray)


profileButton.addEventListener('click',(event) => {
    event.stopPropagation();
    let isLoggedIn = localStorage.getItem('isLoggedIn');
       if(isLoggedIn == 'true'){
         location.href='../profile';
       }else{
         alert('You are not loggedin!');
         location.href='../login'
       }
 })


function renderItems(){
    // const retrievedMapJsonString = localStorage.getItem("itemMap");
    // const retrievedMapArray = JSON.parse(retrievedMapJsonString);
    // const retrievedMap = new Map(retrievedMapArray);
    // console.log(retrievedMap)
    let users = JSON.parse(localStorage.getItem('users'));
    let userId = localStorage.getItem('loggedInUser');
    let currUserCart;
    users.forEach(user => {
        if(user.id === userId){
            currUserCart = user.userCart;
        }
    })

    if(currUserCart){
        console.log('cart exists')
        //render carts
        let mycart
    }else{
        // show message that there is not element inside mycart
        alert('cart is empty');
        return;
    }


    let productsArray = JSON.parse(localStorage.getItem('productsArray'));
    products_div.innerHTML = '';
    price_details_div.innerHTML = '';
    let total = 0;

    productsArray.forEach(product => {
        if(currUserCart.includes(product.id)){
                let prices_div = document.createElement('div');
                prices_div.setAttribute('class','prices');
                prices_div.innerHTML = `
                            <div class="name">1.${product.title}</div>
                            <div class="price">$${product.price}</div>
                `
                total += product.price;
                let item_div = document.createElement('div');
                item_div.setAttribute("class", "item");
                item_div.innerHTML = `
                <div class="item-image">
                    <img
                    src=${product.image}
                    alt=""
                    />
                </div>
                <div class="item-details">
                    <div class="price-size">
                        <p>Price : </p>
                        <p>$${product.price}</p>
                    </div>
                    <div class="item-title">
                        <p>Title : </p>
                        <p>$${product.title.substr(0,15)}</p>
                    </div>
                </div>
                <div class="item-cart">
                    <button type="button" onclick = "removeFromCart(${product.id})">Remove From Cart</button>
                </div>
                `
                products_div.append(item_div);
                price_details_div.appendChild(prices_div);
            
        
        }
    })

    

    let total_price = document.createElement('div');
            total_price.setAttribute('class','total-price');
            total_price.innerHTML = `
                    <div class="name">Total is</div>
                    <div id="grandTotal" class="price">$${total}</div>
            `
    price_details_div.appendChild(total_price);
}

renderItems();

function removeFromCart(productId){
    let users = JSON.parse(localStorage.getItem('users'));
    let userId = localStorage.getItem('loggedInUser');
    let currUser; // here we will find user itself so that after removing the item from cart will be able to samve updated user in users array
    let updatedUserArray = users.filter(user => {
        return user.id !== userId;
    })
    users.forEach(user => {
        if(user.id === userId){
            currUser = user;
        }
    })


    const index = currUser.userCart.indexOf(productId);
    if (index !== -1) {
        currUser.userCart.splice(index, 1);
    }
    updatedUserArray.push(currUser);
    localStorage.setItem('users',JSON.stringify(updatedUserArray));
    renderItems();
    // localStorage.setItem('cartItems',JSON.stringify(cartItems));
}

document.getElementById("cart-checkout").onclick = function (e) {
    let grandTotal = parseInt(document.getElementById('grandTotal').innerText.substring(1)) * 100;
    console.log(grandTotal);
    var options = {
      key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
      amount: grandTotal,//check this out if this is paisa or INR // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "accio portal",
      description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#122620",
      },
      image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
      handler: function () { // run a function when your payment is successfull
        location.href = "./shop.html";
      },
      options: {
        checkout: {
          method: {
            netbanking: 0,
            card: 0,
            upi: 1,
            wallet: 0,
          },
        },
      },
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    // clear mycart - localStorage
    e.preventDefault();
};


