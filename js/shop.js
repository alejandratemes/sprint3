// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    for (let i= 0; i < products.length; i++) {
        if(products[i].id === id) {
            cartList.push(products[i])
        }
    }
    console.log(cartList)
}

// Exercise 2
function cleanCart() {
    cart.splice(0,cart.length)
    cartList.splice(0,cartList.length)
    total = 0
    document.getElementById('cart_list').innerHTML = ""
    document.getElementById('total_price').innerHTML = 0
}

// Exercise 3
function calculateTotal() {
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].total
    }
    console.log(total)
}

// Exercise 4
function generateCart() {
    cartList.forEach(function (element) {element.quantity = 1;})
    for (let i=0; i < cartList.length; i++) {
        let exists = cart.find(cart => cart === cartList[i])
        if (exists) {
            cart.quantity = cartList[i].quantity++
        } else {
            cart.push(cartList[i])
        }
    }
    console.log(cart)
}

// Exercise 5
function applyPromotionsCart() {
    let newPrice = 0
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3) {
            newPrice = 10
            cart[i].subtotalWithDiscount = newPrice*cart[i].quantity
            cart[i].total = cart[i].subtotalWithDiscount
        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= 10) {
            newPrice = (cart[i].price*2)/3
            cart[i].subtotalWithDiscount = newPrice*cart[i].quantity
            cart[i].total = cart[i].subtotalWithDiscount
        } else {
            cart[i].total = cart[i].price*cart[i].quantity
        }
        console.log(cart)
    }
}


// Exercise 6
function printCart() {

    generateCart()
    applyPromotionsCart()
    calculateTotal()
    
    cart.forEach(function (element) {
        let listInfo = `<tr>
                        <th scope ="row">${element.name}</th>`

        listInfo += `<td>$${element.price}</td>
                     <td>${element.quantity}
                     <td>$${element.total}</td>`
        listInfo += `<tr>`
        document.getElementById('cart_list').innerHTML += listInfo
    })
    document.getElementById('total_price').innerHTML = total
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    for (let i= 0; i < products.length; i++) {
        if(products[i].id === id) {
            let exists = cart.find(cart => cart === products[i])
            if (exists){
                cart.quantity = products[i].quantity++
            } else {
            cart.push(products[i])
            products[i].quantity = 1
            }
        }
    }
    console.log(cart)
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}