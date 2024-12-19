const age = prompt("Please enter your age")
console.log(age);

if (age <= 12){
    // do this if customer is yunger than 12
    alert("The customer ticket is free!");
}
else if (age >=65){
    alert("Thge customer ticket is free!!");
} else {
    alert("Plaese pay the full price");
}