console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*
the reason is that at equality check == and comparisons > < >= <= works differently
comparisons convert null to number, treating it as a 0 
that's why null >= 0 is true and null > 0 is false
*/

console.log(undefied > 0); //false
console.log(undefied == 0); //false
console.log(undefied >= 0); //false