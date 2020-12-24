var A = 43;
console.log(A);
console.log(typeof(A));

var b2 = "25 Years" 
console.log(b2)
console.log(typeof(b2))

var n = true;
console.log(n)
console.log(typeof(n))



var phone = prompt("Enter price:")
var tax = prompt("Enter tax in percentage:")
var tax_value = phone/100*tax;
var phone30 = (phone*30) + (tax_value*30)
console.log("The price for 30phones is:")
console.log(phone30)