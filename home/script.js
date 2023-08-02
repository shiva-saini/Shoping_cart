// all divisions buttons
const mens_div = document.getElementById('mens');
const womens_div = document.getElementById('womens');
const electronics_div = document.getElementById('electronics');
const jewelery_div = document.getElementById('jewelery');
let all_div = document.getElementById('all');

// filter section related all buttons
let filterButton = document.getElementById("filterbtn");
let color_section = document.getElementById("color-section");
let size_section = document.getElementById("size-section");
let range_input = document.getElementById("range-input");
let price_range_section = document.getElementById("price-range-section");
let myCartButton = document.getElementById('mycart');
let profileButton = document.getElementById('profile');
let loginButton = document.getElementById('login');
let sugnupButton = document.getElementById('signup');
let homeButton = document.getElementById('home');

// all the buttons below search bar
let all_button = document.getElementById('btn-all')
let men_button = document.getElementById('btn-men');
let women_button = document.getElementById('btn-women');
let electronics_button = document.getElementById('btn-electronics');
let jewelery_button = document.getElementById('btn-jewelery');

// all the heading divs

let men_heading = document.getElementById('men-heading');
let women_heading = document.getElementById('women-heading');
let electronics_heading = document.getElementById('electronics-heading');
let jewelery_heading = document.getElementById('jewelery-heading');


// cart button related logic

homeButton.addEventListener('click',(event) => {
   event.stopPropagation();
   location.href='../home'
})

// loginButton.addEventListener('click',(event) => {
//     event.stopPropagation();
//     location.href = '../login';
// })

// sugnupButton.addEventListener('click',(event) => {
//     event.stopPropagation();
//     location.href = '../signup';
// })

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

let sizeArray = ['s','m','l','xl'];
let colorArray = ["blue","grey","red","olive"];
let myArray = [];
let itemMap = new Map();
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => {
     myArray = data.map(product => {
        product.sizeArray = sizeArray;
        product.colorArray = colorArray;
        // itemMap.set(product.id,product);
        return product;
    })
    localStorage.setItem('productsArray',JSON.stringify(myArray));
    const mapJsonString = JSON.stringify(Array.from(itemMap.entries()));
    localStorage.setItem("itemMap", mapJsonString);
   renderItems();
})


// here render function will run

function renderItems(){
    myArray.map((product) => {
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('mens') || product.category.toLowerCase().includes("men's")){
            mens_div.append(item_div);
        }
    })


    myArray.map((product) => {
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('womens') || product.category.toLowerCase().includes("women's")){
            womens_div.append(item_div);
            // console.log(product);
        }
    })


    myArray.map((product) => {
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('electronics')){
            electronics_div.append(item_div);
            // console.log(product);
        }
    })


    myArray.map((product) => {
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('jewelery')){
            jewelery_div.append(item_div);
            jewelery_div.append(item_div);

            // console.log(product);
        }
    })

    myArray.map((product) => {
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('jewelery')){
            jewelery_div.append(item_div);
            // console.log(product);
        }
    })

    myArray.map((product) => {
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('jewelery')){
            jewelery_div.append(item_div);
            // console.log(product);
        }
    })  

}



// here  filter button logic will work

filterButton.addEventListener("click", () => {
  const colorCheckboxes = color_section.querySelectorAll(
    'input[type="checkbox"]'
  );
  const colors_checkedValues = giveMeCheckedValues(colorCheckboxes); // this is a set 
  mens_div.innerHTML = "";
  womens_div.innerHTML = "";
  electronics_div.innerHTML = "";
  jewelery_div.innerHTML = "";

  const sizeCheckboxes = size_section.querySelectorAll(
    'input[type="checkbox"]'
  );
  const sizes_checkedValues = giveMeCheckedValues(sizeCheckboxes);  // this is a set 

  const priceCheckboxes = price_range_section.querySelectorAll(
    'input[type="checkbox"]'
  );
  const price_checkedValues = giveMeCheckedValues(priceCheckboxes);  // this is a set 

  
  myArray.map(product => {
        let color = false;
        let size = false;
        let price = false;
        let rating = false;

        for(let i=0;i<product.sizeArray.length;i++){
            if(sizes_checkedValues.has(product.sizeArray[i])){
                size = true;
                break;
            }
        }

        for(let i=0;i<product.colorArray.length;i++){
            if(colors_checkedValues.has(product.colorArray[i])){
                color = true;
                break;
            }
        }
       
        for (const value of price_checkedValues) {
            let arr = value.split('-');
            let num1 = parseInt(arr[0]);
            let num2 = parseInt(arr[1]);
            if(Math.floor(product.price) >= num1 && Math.floor(product.price) <= num2){
                price = true;
                break;
            }
        }

        if(product.rating.rate >= parseFloat(range_input.value) - 0.5 && product.rating.rate <= parseFloat(range_input.value) + 1.0){
            rating = true;
            console.log('rating status is',rating)
        }

        if(color === false || size === false || price === false || rating === false) return;
        
        if(color && size && price && rating){
            console.log('condition is true')
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
                    <p>$100</p>
                    <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
                </div>
                <div class="item-colors">
                    <h3>Colors :</h3>
                    <div class="points">
                        <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                        <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                        <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    </div>
                </div>
                <div class="item-rating">
                    <h3>Rating :</h3>
                    <div class="star-rating">
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                    </div>
                </div>
            </div>
            <div class="item-cart">
                <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
            </div>
            `
            if(product.category.toLowerCase().includes('mens') || product.category.toLowerCase().includes("men's")){
                mens_div.append(item_div);
                // console.log(product)
            }




        }
       
  })

  myArray.map(product => {
    let color = false;
    let size = false;
    let price = false;
    let rating = false;

    for(let i=0;i<product.sizeArray.length;i++){
        if(sizes_checkedValues.has(product.sizeArray[i])){
            size = true;
            break;
        }
    }

    for(let i=0;i<product.colorArray.length;i++){
        if(colors_checkedValues.has(product.colorArray[i])){
            color = true;
            break;
        }
    }
   
    for (const value of price_checkedValues) {
        let arr = value.split('-');
        let num1 = parseInt(arr[0]);
        let num2 = parseInt(arr[1]);
        if(Math.floor(product.price) >= num1 && Math.floor(product.price) <= num2){
            price = true;
            break;
        }
    }

    if(product.rating.rate >= parseFloat(range_input.value) - 0.5 && product.rating.rate <= parseFloat(range_input.value) + 1.0){
        rating = true;
        console.log('rating status is',rating)
    }

    if(color === false || size === false || price === false || rating === false) return;

    if(color && size && price && rating){
        console.log('condition is true')
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('womens') || product.category.toLowerCase().includes("women's")){
            womens_div.append(item_div);
            // console.log(product);
        }
    }
    
  })



  myArray.map(product => {
    let color = false;
    let size = false;
    let price = false;
    let rating = false;

    for(let i=0;i<product.sizeArray.length;i++){
        if(sizes_checkedValues.has(product.sizeArray[i])){
            size = true;
            break;
        }
    }

    for(let i=0;i<product.colorArray.length;i++){
        if(colors_checkedValues.has(product.colorArray[i])){
            color = true;
            break;
        }
    }
   
    for (const value of price_checkedValues) {
        let arr = value.split('-');
        let num1 = parseInt(arr[0]);
        let num2 = parseInt(arr[1]);
        if(Math.floor(product.price) >= num1 && Math.floor(product.price) <= num2){
            price = true;
            break;
        }
    }

    if(product.rating.rate >= parseFloat(range_input.value) - 0.5 && product.rating.rate <= parseFloat(range_input.value) + 1.0){
        rating = true;
        console.log('rating status is',rating)
    }

    if(color === false || size === false || price === false || rating === false) return;

    if(color && size && price && rating){
        console.log('condition is true')
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick = "addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('electronics')){
            electronics_div.append(item_div);
            // console.log(product);
        }
    }
    
  })


  myArray.map(product => {
    let color = false;
    let size = false;
    let price = false;
    let rating = false;

    for(let i=0;i<product.sizeArray.length;i++){
        if(sizes_checkedValues.has(product.sizeArray[i])){
            size = true;
            break;
        }
    }

    for(let i=0;i<product.colorArray.length;i++){
        if(colors_checkedValues.has(product.colorArray[i])){
            color = true;
            break;
        }
    }
   
    for (const value of price_checkedValues) {
        let arr = value.split('-');
        let num1 = parseInt(arr[0]);
        let num2 = parseInt(arr[1]);
        if(Math.floor(product.price) >= num1 && Math.floor(product.price) <= num2){
            price = true;
            break;
        }
    }

    if(product.rating.rate >= parseFloat(range_input.value) - 0.5 && product.rating.rate <= parseFloat(range_input.value) + 1.0){
        rating = true;
        console.log('rating status is',rating)
    }

    if(color === false || size === false || price === false || rating === false) return;

    if(color && size && price && rating){
        console.log('condition is true')
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
                <p>$100</p>
                <p>${sizeArray[Math.floor(Math.random() * sizeArray.length)]} , ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}, ${sizeArray[Math.floor(Math.random() * sizeArray.length)]}</p>
            </div>
            <div class="item-colors">
                <h3>Colors :</h3>
                <div class="points">
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                    <div class=${colorArray[Math.floor(Math.random() * colorArray.length)]}></div>
                </div>
            </div>
            <div class="item-rating">
                <h3>Rating :</h3>
                <div class="star-rating">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
            </div>
        </div>
        <div class="item-cart">
            <button type="button" onclick="addToCart(${product.id})">Add To Cart</button>
        </div>
        `
        if(product.category.toLowerCase().includes('jewelery')){
            jewelery_div.append(item_div);
            // console.log(product);
        }
    }
    
  })

});

function giveMeCheckedValues(checkboxes) {
  const checkedValues = new Set();
  checkboxes.forEach((checkboxe) => {
    if (checkboxe.checked) {
      checkedValues.add(checkboxe.value.toLowerCase());
      console.log(checkboxe.value.toLowerCase());
    }
  });
  return checkedValues;
}



// here add to cart logic will work
// we have to write it here if we will write it upper side it will not work because at that time item is not rendered that means button is also not rendered 

function addToCart(productId){
    // let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let userArray = JSON.parse(localStorage.getItem('users'));
    let userId = localStorage.getItem('loggedInUser');
    if(userId){
        userArray.forEach(user => {
            if(user.id === userId){
                // console.log(typeof user.userCart)
                user.userCart.push(productId);
                console.log(user.userCart);
                console.log(`id ${userId} is added in cart`);
                localStorage.setItem('users',JSON.stringify(userArray));
            }
        })
    }else{
        alert('To add an item in your cart you first need to login');
        location.href='../login';
    }
}


all_button.addEventListener('click',(event) => {
    men_heading.style.display='block'
    mens_div.style.display='flex';
    women_heading.style.display='block';
    womens_div.style.display='flex';
    electronics_heading.style.display='block'
    electronics_div.style.display='flex';
    jewelery_heading.style.display='block'
    jewelery_div.style.display='flex';
})

men_button.addEventListener('click',(event) => {
    
let men_button = document.getElementById('btn-men');
    men_heading.style.display='block'
    women_heading.style.display='none';
    electronics_heading.style.display='none';
    jewelery_heading.style.display='none';
    mens_div.style.display='flex';
    womens_div.style.display='none';
    electronics_div.style.display='none';
    jewelery_div.style.display='none';

})

women_button.addEventListener('click',(event) => {
    women_heading.style.display='block';
    womens_div.style.display='flex';
    men_heading.style.display='none';
    electronics_heading.style.display='none';
    jewelery_heading.style.display='none';
    mens_div.style.display='none';
    electronics_div.style.display='none';
    jewelery_div.style.display='none';
})


electronics_button.addEventListener('click',(event) => {
    electronics_heading.style.display='block'
    electronics_div.style.display='flex';
    men_heading.style.display='none'
    women_heading.style.display='none';
    jewelery_heading.style.display='none';
    mens_div.style.display='none';
    womens_div.style.display='none';
    jewelery_div.style.display='none';
})

jewelery_button.addEventListener('click',(event) => {
    jewelery_heading.style.display='block'
    jewelery_div.style.display='flex';
    men_heading.style.display='none'
    women_heading.style.display='none';
    electronics_heading.style.display='none';
    mens_div.style.display='none';
    womens_div.style.display='none';
    electronics_div.style.display='none';
})