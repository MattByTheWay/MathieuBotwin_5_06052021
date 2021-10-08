let confirmationOrder = JSON.parse(localStorage.getItem('orderConfirmation'));
let totalPayout = 0;
console.log(confirmationOrder);

for (let i = 0; i < (confirmationOrder.products).length; i++) {
    let productprice = confirmationOrder.products[i].price;
    totalPayout = totalPayout + productprice;
    }

document.getElementById("commandID").innerHTML = 'N°' + confirmationOrder.orderId;

document.getElementById("totalPayout").innerHTML = 'Prix total :' + totalPayout;