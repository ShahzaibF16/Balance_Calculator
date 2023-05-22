var show = document.getElementById("show")
var check_btn = document.getElementById("check_btn");

// button function
check_btn.addEventListener("click", function(){
event.preventDefault()
var amountInput = document.getElementById("amount").value;
var taxInput = document.getElementById("tax").value;
var amount = parseFloat(amountInput);
var tax = parseFloat(taxInput)
console.log(amount)
console.log(tax)
// Amount Input
var inp_amount = amount;
// calculate Tax
var tax_per = tax;
var tax_calc = tax_per / 100 * inp_amount;
// Tax percent
var final_balance; 
final_balance = inp_amount - tax_calc;
show.innerHTML = final_balance;
console.log(final_balance)
})