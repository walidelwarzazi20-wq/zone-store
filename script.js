
let cart = [];
let totalCount = 0;

/**
 * Adds a selected item to the cart and updates the UI
 * @param {string} productName 
 * @param {number} price 
 */
function addToCart(productName, price) {
    
    cart.push({ name: productName, price: price });
    
    
    totalCount = cart.length;
    document.getElementById('cart-count').innerText = totalCount;
    
    
    const detailsField = document.getElementById('details');
    detailsField.value = `Hello, I want to order the following item:\n- Item: ${productName}\n- Price: ${price} DH\n- Required Size (S/M/L/XL): `;
    
   
    alert(`"${productName}" has been successfully added to your cart!\nScroll down to complete your shipment details.`);
}


document.getElementById('cart-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is currently empty. Explore our collection to add items!");
    } else {
        const totalItemsPrice = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Shopping Cart Overview:\n-------------------------\nTotal Items: ${cart.length}\nGrand Total: ${totalItemsPrice} DH.`);
    }
});


document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    
    let clientName = document.getElementById('name').value;
    let clientPhone = document.getElementById('phone').value;
    let orderDetails = document.getElementById('details').value;
    
    
    let myWhatsAppNumber = "212600000000"; 
    
   
    let message = `🚨 *New Order Request* 🚨%0A%0A` +
                  `👤 *Name:* ${encodeURIComponent(clientName)}%0A` +
                  `📞 *Phone:* ${encodeURIComponent(clientPhone)}%0A` +
                  `👕 *Order Details:* %0A${encodeURIComponent(orderDetails)}`;
    
    
    let whatsappURL = `https://wa.me/${myWhatsAppNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    
    document.getElementById('orderForm').reset();
});