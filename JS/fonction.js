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

  class Contact  {
    constructor(firstName, lastName, adress, city, email) {   
    this.firstName = firstName;
    this.lastName = lastName;
    this.adress = adress;
    this.city = city;
    this.email = email;
    }
    };

  function validateText(form) {
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
    let newAdress = form.inputAddress.value;
    let newCity = form.inputCity.value;
    let newEmail = form.inputEmail.value;

    let newContact = new Contact (newfirstName,newlastName,newAdress,newCity,newEmail);
    console.log(newContact);
    
    fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
        },
        body: JSON.stringify(shoppingBasket+newContact)   
    });
  }
