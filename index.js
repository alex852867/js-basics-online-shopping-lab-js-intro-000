var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var item = generateCartItem(item)
getCart().push(item)
return `${item.itemname} has been added to your cart`
}

function viewCart() {
return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function total() {
  var sum = sumUpPrices()
  return sum
  // write your code here
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove() // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
 // helper functions

 // helper functions
function generateCartItem(itemName){
  return {
    itemName:itemName,
    itemPrice: getRamdonInt(1, 100)
  }
}
 // helper functions
function getRamdonInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 // helper functions
 function generateCartDescription() { //mine new
    var cartDescription = 'In your cart, you have '
    if ( getCart().length >=1) {
      cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
    }
    if ( getCart().length >=2) {
        var middleCartItemDescription = ''
        for (var i=1; i<getCart().length-1; i++) {
          middleCartItemDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
        }
        cartDescription += `${middleCartItemDescription}, and ${getCart()[getCart().length-
          1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
        }
    return `${cartDescription}.`
  }
 // helper functions
function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}




  // helper functions
function sumUpPrices() {
var sum = 0
for (var i=0; i<getCart().length; i++) {
sum += getCart()[i].itemPrice
}
return sum
}
 // helper functions
 function notifyUserThereIsNoItemToRemove() {
   return 'That item is not in your cart.'
 }
 // helper functions
 function removeItemFromCart(itemToRemove) {
   var indexOfItemsToRemove = cart.indexOf(itemToRemove)
   getCart().splice(indexOfItemsToRemove,1)
 }
