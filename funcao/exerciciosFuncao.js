//01 - Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
 
function calc (a = 0, b = 0) {
    let soma = a + b, sub = a - b, mult = a * b, div = a / b
    return console.log (`Exercício 01
    Soma: ${soma}
    Subtração: ${sub}
    Multiplicação: ${mult}
    Divisão: ${div}`)
 }

 calc(5, 2)

 //02 - Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. 

let verificarTriangulo = (a = 0, b = 0, c = 0) => {
    let resultado
    if(a === 0 && b === 0 && c === 0){
        resultado = "Não é um triângulo"
    } else if (a === b && b === c) {
        resultado = "Equilátero"
    } else if (a !== b && b !== c) {
        resultado = "Escaleno"
    } else {
        resultado = "Isósceles"
    }
    return console.log("Exercício 02 - ", resultado)
} 

verificarTriangulo(4, 5, 6)

//03 - Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

let resultado = (base = 0, expoente = 0) => base **= expoente
console.log("Exercício 03 - resultado: ", resultado(1, 0))

//04 - Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultadoe o resto da divisão destes dois valores.

let divisao = (dividendo = 0, divisor = 0) => {
    let quociente =  dividendo / divisor, resto = dividendo % divisor
    console.log("Exercício 04 - Quociente: ", quociente, "Resto: ", resto)
}

divisao(3,2)

//05 - Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

let valor = (preco) => console.log("Exercício 05 - R$"+preco.toFixed(2).replace('.' , ','))
valor(0.30000000000000004)

let valor2 = (preco) => console.log("Exercício 05 - ", preco.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}))
valor2(0.30000000000000004)

//06 - 