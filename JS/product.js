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
    newImg.style.maxHeight = "330px";
    newImg.style.minHeight = "330px";
    newImg.src=(value.imageUrl);
    document.getElementById("productCol").appendChild(newImg);

    let newCol2 = document.createElement("div"); 
    newCol2.id = 'productCol2'; 
    newCol2.classList.add("col-md-8");
    document.getElementById("productDescription").appendChild(newCol2); 
    
    let newBody = document.createElement("div"); 
    newBody.id = 'productBody'+i; 
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

    // let newButton = document.createElement("button"); 
    // newButton.type = "button";
    // newButton.id = "buttonid"+i; 
    // newButton.classList.add("btn", "btn-primary");
    //   newButton.textContent = "En savoir plus >";
    //   document.getElementById("productBody"+i).appendChild(newButton);    
    //   console.log('Element créer');
    //   const buttonClick = document.getElementById("buttonid"+i);   
    //   buttonClick.addEventListener('click', function() {  
    //     setCookie('product_choose',value[i]._id,7);
    //     window.location.href = 'product.html';
    });
  })
  .catch(function(err) {
    // Une erreur est survenue
  });