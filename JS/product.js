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

  function deleteCookie(name) { setCookie(name, '', -1); }

const productid = getCookie('product_choose');

fetch("http://localhost:3000/api/teddies/"+ productid)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);

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
    newH5.classList.add("card-title");
    newH5.textContent = (value.name);
    document.getElementById("productCol2").appendChild(newH5);

    let newDescription = document.createElement("p"); 
    newDescription.id = 'productDescription'; 
    newDescription.classList.add("card-text","pb-3");
    newDescription.textContent = (value.description);
    document.getElementById("productCol2").appendChild(newDescription);   

    let newPrice = document.createElement("p"); 
    newPrice.id = 'productPrice'; 
    newPrice.classList.add("card-text","text-right");
    newPrice.textContent = (value.price);
    document.getElementById("productCol2").appendChild(newPrice);   

    let newRates = document.createElement("i"); 
    newRates.id = 'productRates'; 
    newRates.classList.add("fas fa-star","result__note");
    document.getElementById("productCol2").appendChild(newRates);   

    let newRates2 = document.createElement("i"); 
    newRates2.id = 'productRates2'; 
    newRates2.classList.add("fas fa-star","result__note");
    document.getElementById("productCol2").appendChild(newRates2);  

    let newRates3 = document.createElement("i"); 
    newRates3.id = 'productRates3'; 
    newRates3.classList.add("fas fa-star","result__note");
    document.getElementById("productCol2").appendChild(newRates3);  

    let newRates4 = document.createElement("i"); 
    newRates4.id = 'productRates4'; 
    newRates4.classList.add("fas fa-star","result__note");
    document.getElementById("productCol2").appendChild(newRates4);  

    let newRates5 = document.createElement("i"); 
    newRates5.id = 'productRates5'; 
    newRates5.classList.add("fas fa-star","result__note--grey");
    document.getElementById("productCol2").appendChild(newRates5);  
  })
  .catch(function(err) {
    // Une erreur est survenue
  });