//Business Logic
function BankAccount(name, initial, deposit, withdraw) {
  this.name = name;
  this.initialDepo = initial;
  this.deposit = deposit;
  this.withdraw = withdraw;
}

BankAccount.prototype.result = function() {
  // var currentValue = this.initialDepo;
  if (this.initialDepo + this.deposit < this.withdraw) {
    alert("Sorry for the inconvinence, but you don't have enough funds!");

  } else if
    (this.initialDepo === 0 && this.deposit === 0 && this.withdraw === 0) {
    alert("Enter a valid information!");
  }
   else {
    return this.initialDepo + this.deposit - this.withdraw;
  }
  }

//User Logic
$(document).ready(function(){
  $("#bankaccount").submit(function(event){
    event.preventDefault();

    var nameInput = $("#name").val();
    var initialInput = parseInt($("#initial").val());
    var depositInput = parseInt($("#deposit").val());
    var withdraw = parseInt($("#withdraw").val());

    var accountInput = new BankAccount(nameInput, initialInput, depositInput, withdraw);

    $(".customer").text(nameInput);
    $(".final").text(accountInput.result());

  });
});
