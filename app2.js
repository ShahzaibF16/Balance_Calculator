var show = document.getElementById("show");
var check_btn = document.getElementById("check_btn");

check_btn.addEventListener("click", function() {
  event.preventDefault();

  var desiredBalanceInput = document.getElementById("amount").value;
  var taxInput = document.getElementById("tax").value;
  var desiredBalance = parseFloat(desiredBalanceInput);
  var tax = parseFloat(taxInput);

  var tax_per = tax;
  var inputAmount = desiredBalance / (1 - tax_per / 100);
  var taxAmount = inputAmount * (tax_per / 100);
  var finalBalance = inputAmount - taxAmount;

  show.innerHTML = inputAmount.toFixed(2); // Display required input amount
  console.log("Required Input Amount:", inputAmount.toFixed(2));
  console.log("Final Balance:", finalBalance.toFixed(2));
});
