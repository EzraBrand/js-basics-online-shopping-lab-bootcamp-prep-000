var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//#1 addToCart
function addToCart(item) {
 // write your code here
 Object.assign({}, {item: Math.floor(Math.random)})
  return `${item} has been added to your cart.`
 }

//#2 viewCart()
function viewCart() {
  // write your code here
  let str = 'In your cart, you have'
  for (let i=0; i<Object.keys(cart).length,i++) {
    str += `${cart[i][itemName]} at ${cart[i][itemPrice]}`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
