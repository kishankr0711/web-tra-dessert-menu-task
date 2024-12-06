// Select all Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".item button");
const cart = document.querySelector(".cart");
const cartItems = document.createElement("ul");
cartItems.classList.add("cart-items");
cart.appendChild(cartItems);

let cartCount = 0;

// Function to handle adding items to the cart
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const item = event.target.parentElement; // Get the parent element of the button
    const itemName = item.querySelector("h2").textContent; // Get the item's name
    const itemPrice = item.querySelector("p").textContent; // Get the item's price

    // Create a new cart item
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.textContent = `${itemName} - ${itemPrice}`;

    // Add Remove button to each cart item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
      cartItem.remove(); // Remove the item from the cart
      updateCartCount(-1);
    });

    cartItem.appendChild(removeButton); // Add the Remove button to the cart item
    cartItems.appendChild(cartItem); // Add the cart item to the cart list

    updateCartCount(1); // Increment the cart count
  });
});

// Function to update cart count
function updateCartCount(change) {
  cartCount += change;
  const cartHeader = cart.querySelector("h2");
  cartHeader.textContent = `Your Cart (${cartCount})`;

  // If the cart is empty, show a placeholder message
  if (cartCount === 0) {
    const placeholder = document.createElement("p");
    placeholder.textContent = "Your added items will appear here";
    placeholder.classList.add("placeholder");
    cart.appendChild(placeholder);
  } else {
    const placeholder = cart.querySelector(".placeholder");
    if (placeholder) placeholder.remove(); // Remove the placeholder
  }
}
