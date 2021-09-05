//computes values when "Compute Interest" is clicked
function compute() {

    //variable called "principal" and assigning it the value of the input element having id of "principal"
    var principal = parseFloat(document.getElementById("principal").value);
    
    //variable called "rate" and assigning it the value of the input element having id of "rate"
    var rate = parseFloat(document.getElementById("rate").value);

    //variable called "years" and assigning it the value of the input element having id of "years"
    var years = parseInt(document.getElementById("years").value);

    //variable called "interest" and assigning the formula to the value of principal * years * rate / 100
    var interest = principal * years * rate / 100;

    //converts the 'No of Years' into the actual year in the future
    var futureYear = new Date().getFullYear() + parseInt(years);
    
    //Interest transcript
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + futureYear + "</mark>";

}

//update rate value
function updateRate() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

//check for positive values
//if user enters zero or negative values, show alert
function amountValidate() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    }

}        
        
