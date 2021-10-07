class contact  {
  constructor(firstName, lastName, address, city, email) {   
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.city = city;
  this.email = email;
  }
  };

let shoppingBasket = JSON.parse(getCookie('shoppingBasket'));
let totalBasket = 0;

for (let i = 0; i < shoppingBasket.length; i++) {

  let newCol = document.createElement("div"); 
  newCol.id = 'productCol'+i; 
  newCol.classList.add("col-md-4");
  document.getElementById("productDescription").appendChild(newCol); 

  let newImg = document.createElement("img"); 
  newImg.id = 'productImg'+i; 
  newImg.classList.add("img-fluid","rounded-start");
  newImg.src=(shoppingBasket[i].imageUrl);
  document.getElementById("productCol"+i).appendChild(newImg);

  let newCol2 = document.createElement("div"); 
  newCol2.id = 'productCol2'+i; 
  newCol2.classList.add("col-md-8");
  document.getElementById("productDescription").appendChild(newCol2); 
  
  let newBody = document.createElement("div"); 
  newBody.id = 'productBody'+i; 
  newBody.classList.add("card-body");
  document.getElementById("productCol2"+i).appendChild(newBody); 

  let newH5 = document.createElement("h5"); 
  newH5.id = 'productTitle'+i; 
  newH5.classList.add("card-title","text-uppercase");
  newH5.textContent = (shoppingBasket[i].name);
  document.getElementById("productBody"+i).appendChild(newH5);

  let newDescription = document.createElement("p"); 
  newDescription.id = 'productDescription'+i; 
  newDescription.classList.add("card-text","pb-3");
  newDescription.textContent = (shoppingBasket[i].description);
  document.getElementById("productBody"+i).appendChild(newDescription);   

  let newPrice = document.createElement("p"); 
  newPrice.id = 'productPrice'+i; 
  newPrice.classList.add("card-text","text-right","font-weight-bold");
  newPrice.textContent = (shoppingBasket[i].price+"€");
  let productprice = shoppingBasket[i].price;
  totalBasket = totalBasket + productprice;
  let totalBasketprice = document.getElementById("totalBasket");  
  totalBasketprice.textContent = ("Prix Total :"+ totalBasket +"€");
  document.getElementById("productBody"+i).appendChild(newPrice);   

  let newButton = document.createElement("button"); 
  newButton.type = "button";
  newButton.id = "buttonid"+i; 
  newButton.classList.add("btn", "btn-danger");
  newButton.textContent = "Supprimer le produit";
  document.getElementById("productBody"+i).appendChild(newButton);  
  let buttonClick = document.getElementById("buttonid"+i);   
  buttonClick.addEventListener('click', function() {  
      shoppingBasket.splice(i,1);
      totalBasket = totalBasket - productprice;
      totalBasketprice.textContent = ("Prix Total :"+ totalBasket +"€");
      document.getElementById("productCol"+i).innerHTML = '';
      document.getElementById("productCol2"+i).innerHTML = '';
      setCookie('shoppingBasket', JSON.stringify(shoppingBasket),7);
      console.log(shoppingBasket);
  });

  
}



function validateText(event,form) {
  event.preventDefault();
  let reText = /^[a-z ,.'-]+$/i;
  let reNumber = /^[0-9]{4,5}$/i;

  if (!reText.test(form.inputlastName.value)) {
    alert('Les chiffres ne sont pas autorisé pour le Nom de Famille');
    return false;
  }
  if (!reText.test(form.inputfirstName.value)) {
    alert('Les chiffres ne sont pas autorisé pour le Prénom');
    return false;
  }
  if (!reText.test(form.inputCity.value)) {
    alert('Veuillez ne pas utiliser de chiffres pour la ville');
    return false;
  }
  if (!reNumber.test(form.inputZip.value)) {
    alert("Le Code Postal n'est pas valide (entre 4 et 5 chiffres)");
    return false;
  }

  let newfirstName = form.inputfirstName.value;
  let newlastName = form.inputlastName.value;
  let newAddress = form.inputAddress.value;
  let newCity = form.inputCity.value;
  let newEmail = form.inputEmail.value;

  let newContact = new contact (newfirstName,newlastName,newAddress,newCity,newEmail);
  console.log(newContact);

  let payload = {
      "contact": newContact,
    "products": shoppingBasket
  }
  
  fetch("http://localhost:3000/api/teddies/order", {
      method: 'POST',
      headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json' 
      },
      body: JSON.stringify(payload)  
  })
  .then(function(res) {
      if (res.ok) {
      console.log(res);
        return res.json();
      }
    })
    .then(function(value) {
      console.log(value);
  });
}