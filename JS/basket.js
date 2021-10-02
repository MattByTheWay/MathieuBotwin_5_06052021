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
    console.log=(shoppingBasket[i].imageUrl);
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
    totalBasket + shoppingBasket[i].price;
    document.getElementById("productBody"+i).appendChild(newPrice);   

    let newButton = document.createElement("button"); 
    newButton.type = "button";
    newButton.id = "buttonid"+i; 
    newButton.classList.add("btn", "btn-danger");
    newButton.textContent = "Supprimer le produit";
    document.getElementById("productBody"+i).appendChild(newButton);  
    let buttonClick = document.getElementById("buttonid"+i);   
      buttonClick.addEventListener('click', function() {  
        console.log(shoppingBasket);
       
      });

}