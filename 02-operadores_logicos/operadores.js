var edad = 18;
var dni = true;

//ejemplo AND - Y
console.log (edad >= 18 && dni == true);

console.log("==========")

//ejemplo OR - o
console.log (edad >= 18 || dni == true);

//Operadores aritméticos 

const x = 5;
const y = 2;
 
console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25

//Operadores aritméticos unarios 

let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
 
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number

{
    let n1 = 10;
    let n2 = 10;
    
    console.log(n1); // -> 10
    console.log(n1++); // -> 10
    console.log(n1); // -> 11
    
    console.log(n2); // -> 10
    console.log(++n2); // -> 11
    console.log(n2); // -> 11
    
    let n3 = 20;
    let n4 = 20;
    
    console.log(n3); // -> 20
    console.log(n3--); // -> 20
    console.log(n3); // -> 19
    
    console.log(n4); // -> 20
    console.log(--n4); // -> 19
    console.log(n4); // -> 19
}

//Operadores de asignación compuestos 

x += 100;
x = x + 100;  //expresiones iguales

//Operadores lógicos

const a = false;
const b = true;
const c = false;
const d = true;
 
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false

//Operadores lógicos y valores no booleanos 
console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
 
 
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob


//Operadores de asignación compuestos 
let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false


