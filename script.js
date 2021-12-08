// Formating number to money format.
function moneyFormat( number ) {
	// Create our number formatter.
	var formatter = new Intl.NumberFormat('en-US', {
	  style: 'currency',
	  currency: 'USD',
	});
	
	return formatter.format(number);
}
// Only allow max value to 100.
function handleMaxVal( input ) {
	var get_val = Math.abs(input.value);
    if ( get_val > 100 ) {
		input.value = 100;
	}
  }
//Only allow numbers and decimal point.
function isAllowedKey( event ) {
  var charCode = (event.which) ? event.which : event.keyCode;
  if ( charCode != 46 && charCode > 31 && ( charCode < 48 || charCode > 57 ) ) {
	  return false;
  }
  return true;
}
//Calculator Tip function goes here.
function tipCalculator() {
  var totalBill = document.getElementById("total_bill").value;
  var totalPercentage = document.getElementById("tip_percentage").value;
  var totalPeople = document.getElementById("total_people").value;

  //Validating total bill here.
  if ( totalBill === "" || totalBill==0) {
    alert("Please enter valid bill");
    return;
  }
  //Validating tip percentage here.
  if ( totalPercentage == 0 || totalPercentage == '' ) {
	  totalPercentage = 0;
  }
  //Check to see if total no of people is empty or less than or equal to 1
  if ( totalPeople === "" || totalPeople <= 1 ) {
    totalPeople = 1;
  }
  totalPercentage = totalPercentage / 100;
  //Calculating tip here.
  var total = (totalBill * totalPercentage) / totalPeople;
  //Round the total tip to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  var total_per_person = (+totalBill / totalPeople) + +total;
  total_per_person = total_per_person.toFixed(2);
  //Display the tip
  document.getElementById("tip_result").innerHTML = moneyFormat(total);
  document.getElementById("total_per_person").innerHTML = moneyFormat(total_per_person);

}
//click to call function
window.onload = function(){
    document.getElementById("calculate").onclick=function(){
        tipCalculator();
    }
}
//Incrmenet the input value on button click.
function increment_value( element ) {
  var value = parseInt(document.getElementById(element).value, 10);
  if ( value >= 100 && element == 'tip_percentage' ) {
	  return;
  }
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(element).value = value;
}
//Decrement the input value on button click.
function decrement_value(element) {
  var value = parseInt(document.getElementById(element).value);
  if ( value <= 0 || isNaN(value)) {
	  return;
  }
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById(element).value = value;
}