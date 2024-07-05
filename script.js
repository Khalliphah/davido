let items = [];
let totalAmount = 0;

function addItem() {
    let itemName = prompt("Please enter the name of the item:");
    if (itemName) {
        let itemPrice = parseFloat(prompt("Please enter the price of the item:"));
        if (!isNaN(itemPrice)) {
            items.push({ name: itemName, price: itemPrice });
            alert('Item added!');
        } else {
            alert('Please enter the correct amount.');
        }
    } else {
        alert('Please enter a valid item name.');
    }
}

function generateReceipt() {
    let receiptDiv = document.getElementById('receipt');
    receiptDiv.innerHTML = '';
    
    let receiptHTML = '<h3>Receipt</h3>';
    receiptHTML += '<ul class="list-group">';
    items.forEach(item => {
        receiptHTML += `<li class="list-group-item">${item.name}: ₦${item.price.toFixed(2)}</li>`;
        totalAmount += item.price;
    });
    receiptHTML += '</ul>';
    receiptHTML += `<h4 class="mt-3">Total Amount: ₦${totalAmount.toFixed(2)}</h4>`;
    
    receiptDiv.innerHTML = receiptHTML;
    totalAmount = 0; // Reset total amount for next receipt
    items = []; // Reset items list for next receipt
}