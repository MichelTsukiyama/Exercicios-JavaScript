console.log(typeof Object) //function

class Produto {}

console.log(typeof Produto)// function
//JS altamente centrado em funções

//Função sem retorno
function imprimirSoma1(a, b) {
    console.log(a + b)
}

imprimirSoma1(2, 3)// 5
imprimirSoma1(2) //segundo valor undefiened
imprimirSoma1(2,3,4,5,6,7,8) // ignora os outros parametros
imprimirSoma1()

//Função com retorno
function soma1(a, b=0){
    return a + b
}

console.log(soma1(2,3))
console.log(soma1(2)) // desta vez b = 0, logo b != undefined
console.log(soma1()) // a = undefined, logo resultado NaN

//Armazenando uma função em uma variável
const imprimirSoma2 = function (a, b){
    console.log(a + b)
}

imprimirSoma1(2,3)

//Armazenando uma função arrow em uma variável
const soma2 = (a, b) => {
    return a + b
}

console.log(soma2(2,3))

//retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2(1)