let confirmationOrder = JSON.parse(getCookie('orderConfirmation'));
let totalPayout = 0;
console.log(confirmationOrder);

document.getElementById("commandID").innerHTML = 'N°' + confirmationOrder.orderId;

document.getElementById("totalPayout").innerHTML = 'Prix total :' + totalPayout;