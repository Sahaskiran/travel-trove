function displayCartItems() {
    const cartContainer = document.getElementById("cartItems");
    const cart = JSON.parse(localStorage.getItem("cart")) || []; 
    cartContainer.innerHTML = ""; 
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
        <span>${item.name} - Quantity: ${item.quantity}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
  
      cartContainer.appendChild(itemElement);
    });
  }
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); 
  
    localStorage.setItem("cart", JSON.stringify(cart)); 
    displayCartItems(); 
  }
  document.addEventListener("DOMContentLoaded", displayCartItems);
  