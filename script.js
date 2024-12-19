const age = parseInt(prompt("Please enter your age"))
console.log(age);
//let mustPay false;

if (isNaN(age)){
    alert("Please enter a valid number for age")
}

if (age <= 12 || age >= 65){
    // do this if customer is yunger than 12 or older than 65
    alert("The customer ticket is free!");
}
//else if (age >=65){
// alert("Thge customer ticket is free!!");} 
   
   else {
    alert("Plaese pay the full price");
    mustPay = true
}
if (mustPay){
    const amount =prompt("Please pay U$15");
    if (amount == 15){
        alert("Thank you! Come on in!");
    }else {
        alert("Sorry it`s exactly U$15");
    }
}