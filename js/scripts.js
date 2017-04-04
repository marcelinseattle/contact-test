//Business Logic
function Contact(name, email, dob, language) {
  this.name = name;
  this.email = email;
  this.dateOfBirth = dob;
  this.language = language;
  this.address = [];
}

function Address(street, city, state, zipcode) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
}


Address.prototype.fullAddress = function() {
  return this.street + "," + this.city + "," + this.state + "," + this.zipcode;
}


//User Logic
$(document).ready(function(){
  $("#contactInfo").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var emailInput = $("#email").val();
    var birthDate = $("#birthday").val();
    var languageInput = $("#languages").val();

    var informationInput = new Contact(nameInput, emailInput, birthDate, languageInput);



    var streetInput = $("#street").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipcodeInput = $("#zipcode").val();

    var streetInfo = new Address(streetInput, cityInput, stateInput, zipcodeInput);
informationInput.address.push(streetInfo);

console.log(informationInput);


console.log(streetInfo.fullAddress());
  });
});
