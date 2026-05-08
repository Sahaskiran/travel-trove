// Function to toggle the cart's visibility
function toggleCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.style.display = cartContainer.style.display === "none" ? "block" : "none";
    displayCartItems(); // Update cart display when toggling
}
function addToCart(itemName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ name: itemName, quantity: 1 }); 
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${itemName} has been added to your cart!`);
}
function displayCartItems() {
    const cartContainer = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = `<h3>Your Cart</h3>`;
    
    // Display each item in the cart
    if (cart.length === 0) {
        cartContainer.innerHTML += "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.innerText = `${item.name} - Quantity: ${item.quantity}`;
            cartContainer.appendChild(itemElement);
        });
    }
}

// Load cart items when the page is loaded
document.addEventListener("DOMContentLoaded", displayCartItems);
