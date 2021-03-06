  const params = new URLSearchParams(window.location.search);

  const productid = params.get("product");

  let cookieBasket = JSON.parse(localStorage.getItem('shoppingBasket'));
  let shoppingBasket = [];

  if (cookieBasket && cookieBasket.length > 0) {
    shoppingBasket = cookieBasket; 
    console.log('ok');
  }
 
  
  
  


fetch("http://localhost:3000/api/teddies/"+ productid)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {

    let newCol = document.createElement("div"); 
    newCol.id = 'productCol'; 
    newCol.classList.add("col-md-4");
    document.getElementById("productDescription").appendChild(newCol); 

    let newImg = document.createElement("img"); 
    newImg.id = 'productImg'; 
    newImg.classList.add("img-fluid","rounded-start");
    newImg.src=(value.imageUrl);
    document.getElementById("productCol").appendChild(newImg);

    let newCol2 = document.createElement("div"); 
    newCol2.id = 'productCol2'; 
    newCol2.classList.add("col-md-8");
    document.getElementById("productDescription").appendChild(newCol2); 
    
    let newBody = document.createElement("div"); 
    newBody.id = 'productBody'; 
    newBody.classList.add("card-body");
    document.getElementById("productCol2").appendChild(newBody); 

    let newH5 = document.createElement("h5"); 
    newH5.id = 'productTitle'; 
    newH5.classList.add("card-title","text-uppercase");
    newH5.textContent = (value.name);
    document.getElementById("productBody").appendChild(newH5);

    let newDescription = document.createElement("p"); 
    newDescription.id = 'productDescription'; 
    newDescription.classList.add("card-text","pb-3");
    newDescription.textContent = (value.description);
    document.getElementById("productBody").appendChild(newDescription);   

    let newCustom = document.createElement("div");
    newCustom.id = 'newCustom'
    document.getElementById("productBody").appendChild(newCustom);   
    document.getElementById("newCustom").innerHTML='<div class="form-group col-md-4"><label for="inputState">Personnalise ton Ourson !</label><select  id="optionColor" class="form-control"><option selected>Choisir une Couleur...</option></select></div>';
    
    for (let i = 0; i < (value.colors).length; i++) {
    let newColor = document.createElement("option");
    newColor.textContent= (value.colors[i]);
    document.getElementById('optionColor').appendChild(newColor);
    }

    let newPrice = document.createElement("p"); 
    newPrice.id = 'productPrice'; 
    newPrice.classList.add("card-text","text-right","font-weight-bold");
    newPrice.textContent = (value.price+"???");
    document.getElementById("productBody").appendChild(newPrice);   

    let newButton = document.createElement("button"); 
    newButton.type = "button";
    newButton.id = "buttonid"; 
    newButton.classList.add("btn", "btn-primary");
    newButton.textContent = "Ajouter au Panier";
    document.getElementById("productBody").appendChild(newButton);    
    let buttonClick = document.getElementById("buttonid");   
      buttonClick.addEventListener('click', function() {  
        shoppingBasket.push(value);
        newButton.textContent = "  Ajout?? !  ";
        localStorage.setItem('shoppingBasket',JSON.stringify(shoppingBasket));
        // setCookie('shoppingBasket', JSON.stringify(shoppingBasket),7);
         let buttonClick = document.getElementById("buttonoff");  
      });
  })
  .catch(function(err) {
    // Une erreur est survenue
  });