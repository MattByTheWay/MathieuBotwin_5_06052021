let confirmationOrder = JSON.parse(getCookie('orderConfirmation'));
console.log(confirmationOrder);
deleteCookie('orderConfirmation');

document.getElementById("commandID").innerHTML = '';