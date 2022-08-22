// hide and show shopping cart on mouseover
const cartIcon = document.querySelector(".bx-shopping-bag");
const wholeCartWindow = document.querySelector(".whole-cart-window");
cartIcon.addEventListener("mouseover", () => {
  if (wholeCartWindow.classList.contains("hide"))
    wholeCartWindow.classList.remove("hide");
});

cartIcon.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (wholeCartWindow.inWindow === 0) {
      wholeCartWindow.classList.add("hide");
    }
  }, 500);
});

wholeCartWindow.addEventListener("mouseover", () => {
  wholeCartWindow.inWindow = 1;
});

wholeCartWindow.addEventListener("mouseleave", () => {
  wholeCartWindow.inWindow = 0;
  wholeCartWindow.classList.add("hide");
});
//add items to cart
const addToCart = document.getElementsByClassName("orderBtn");
const cart = document.getElementsByClassName("cart-wrapper");
for (var i = 0; i < addToCart.length; i++) {
  const button = addToCart[i];
  button.addEventListener("click", addToCartClicked);
}
function addToCartClicked(event) {
  event.preventDefault();
  const button = event.target;
  const cartItem = button.parentElement;
  const price = cartItem.getElementsByClassName("unit-price")[0].innerText;
  const title = cartItem.getElementsByClassName("gameTitle")[0].innerText;
  const image = cartItem.getElementsByClassName("poster")[0].src;
  addItemToCart(title, price, image);
  updateCartTotal();
}
function addItemToCart(title, price, image) {
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-item");
  const cartItems = document.getElementsByClassName("cart-wrapper")[0];
  const cartItemNames = cartItems.getElementsByClassName("gameTitle");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  const cartRowContents = `
  <img src="${image}"> 
  <div class="details">
      <h3 class="gameTitle">${title}</h3>
      
       <input class="quantity" type="number" value="1"></input>
          <span class="price">$${price}</span>
      
  </div>
  <div class="cancel"><i class='bx bxs-x-circle'></i></div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("cancel")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("quantity")[0]
    .addEventListener("change", quantityChanged);
  const listItems = document.getElementsByClassName("cart-item");
  const cartCount = document.getElementsByClassName("cartCount")[0];
  cartCount.innerHTML = listItems.length;
}
//remove items from cart
function removeCartItem(event) {
  const buttonClicked = event.target;
  const cartItem = buttonClicked.parentElement.parentElement;
  cartItem.remove();
  updateCartTotal();
  const listItems = document.getElementsByClassName("cart-item");
  const cartCount = document.getElementsByClassName("cartCount")[0];
  cartCount.innerHTML = listItems.length;
}
// change quantity of items in cart
function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
//update total price of items in cart
function updateCartTotal() {
  const cartTotal = document.getElementsByClassName("subtotal")[0];
  const cartItems = document.getElementsByClassName("cart-item");
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const quantityElement = cartItem.getElementsByClassName("quantity")[0];

    const priceElement = cartItem.getElementsByClassName("price")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quantityElement.value;
    total = total + quantity * price;
  }
  cartTotal.innerText = "$" + total;
}

//onclick icon scroll left or right
const leftIcon = document.getElementsByClassName("bx-chevron-left")[0];
const rightIcon = document.getElementsByClassName("bx-chevron-right")[0];
leftIcon.addEventListener("click", () => {
  const cartItems = document.getElementsByClassName("trends")[0];
  cartItems.scrollLeft -= 500;
});
rightIcon.addEventListener("click", () => {
  const cartItems = document.getElementsByClassName("trends")[0];
  cartItems.scrollLeft += 500;
});
