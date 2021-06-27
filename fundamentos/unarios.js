let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log( ++num1 === num2--) //são iguais, por causa da precedência o num2 só é decrementado depois da verificação do operador de igualdade estrita

console.log (num1 === num2) //são diferentes