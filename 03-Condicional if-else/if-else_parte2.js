// ejemplo if numero 1

let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}

// ejemplo if numero 2
let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    alert(total);
    console.log(total);
    
}
console.log(total); // -> Uncaught ReferenceError: total is not defined

// ejemplo if numero 3

let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
 
if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}
alert(shippingCost); 
console.log(shippingCost);

// ejemplo if numero 4
// Aquí se evaluará la condición para verdadero cuando:
//edad del usuario es mayor que 21 Y;
//valorcarrito es mayor o igual a 300 O puntos es mayor o igual a 500.
//Por lo tanto, necesitamos que se cumpla la primera condición y al menos una de las condiciones 
//segunda o tercera. 

if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}

// ejemplo if numero 4

let isUserReady = confirm("Are you ready?");
 
if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}