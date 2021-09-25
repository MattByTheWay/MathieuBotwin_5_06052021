function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + ";" + expires + ";";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


setCookie('ppkcookie','testcookie',7);
console.log(getCookie('ppkcookie'));

fetch("http://localhost:3000/api/teddies")
.then(function(res) {
    if (res.ok) {
      
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
    for (let i = 0; i < value.length; i++) {
      let newCol = document.createElement("div"); 
      newCol.id = 'productCol'+i; 
      newCol.classList.add("col-4","pb-3");
      document.getElementById("productContent").appendChild(newCol); 
      let newCard = document.createElement("div"); 
      newCard.id = 'productCard'+i; 
      newCard.classList.add("card","cardhover","border","border-4","rounded","productCol");
      document.getElementById("productCol"+i).appendChild(newCard); 
      let newImg = document.createElement("img"); 
      newImg.id = 'productImg'+i; 
      newImg.classList.add("card-img-top");
      newImg.style.maxHeight = "230px";
      newImg.style.minHeight = "230px";
      newImg.src=(value[i].imageUrl);
      document.getElementById("productCard"+i).appendChild(newImg);
      let newBody = document.createElement("div"); 
      newBody.id = 'productBody'+i; 
      newBody.classList.add("card-body");
      document.getElementById("productCard"+i).appendChild(newBody); 
      let newH2 = document.createElement("h2"); 
      newH2.id = 'productTitle'+i; 
      newH2.classList.add("card-text");
      newH2.textContent = (value[i].name);
      document.getElementById("productBody"+i).appendChild(newH2);
      let newDescription = document.createElement("p"); 
      newDescription.id = 'productDescription'+i; 
      newDescription.classList.add("card-text");
      newDescription.textContent = (value[i].description);
      document.getElementById("productBody"+i).appendChild(newDescription);    
      let newButton = document.createElement("button"); 
      newButton.type = "button";
      newButton.id = value[i]._id; 
      newButton.classList.add("btn", "btn-primary");
      newButton.textContent = "En savoir plus >";
      document.getElementById("productBody"+i).appendChild(newButton);    
      console.log('Element créer');
      const buttonClick = document.getElementById(value[i]._id);   
      buttonClick.addEventListener('click', function() {  
        setCookie('product_choose',value[i]._id,7);
        // let product_choose=getCookie("product_choose");
        // console.log(product_choose);
    });
    
   }
  })
  .catch(function(err) {
    console.log(err);
  });

  setCookie('product_choose',value[i]._id,7);