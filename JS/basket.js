// let shoppingBasket = JSON.parse(getCookie('shoppingBasket'));
let shoppingBasket = [{"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://localhost:3000/images/teddy_2.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://localhost:3000/images/teddy_1.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_3.jpg"}];
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
        delete shoppingBasket[i];
        console.log(shoppingBasket);
    });

}