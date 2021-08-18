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
    if(a === 0 || b === 0 || c === 0){
        resultado = "Não é um triângulo"
    } else if (a === b && b === c) {
        resultado = "Equilátero"
    } else if (a !== b && b !== c && c !== a) {
        resultado = "Escaleno"
    } else {
        resultado = "Isósceles"
    }
    return console.log("Exercício 02 -", resultado)
} 

verificarTriangulo(4, 5, 6)
verificarTriangulo(2, 2, 2)
verificarTriangulo(3, 5, 3)
verificarTriangulo(2, 0, 5)

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

let valor2 = (preco) => console.log("Exercício 05 -", preco.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}))
valor2(0.1 + 0.2)

//06 - Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

let jurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => console.log("Exercício 06 - O montante final é de: ", capitalInicial + capitalInicial * taxaDeJuros * tempoDeAplicacao)

let jurosCompostos = (capital, taxa, tempo) => {
    let montante = capital * (1 + taxa) ** tempo
    console.log("Exercício 06 - O montante final é de: ",  montante.toFixed(2))
}

jurosSimples(10000, 0.02, 5)
jurosCompostos(10000, 0.02, 5)

//07 - Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

const bhaskara = function (ax2, bx, c) {
    const delta = (bx**2) - (4 * ax2  * c) 
    const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2) 
    const x2 = (-bx - Math.sqrt(delta))/ (2 * ax2)
    const vetor = [x1, x2]
    if (delta < 0) {
        console.log('Exercício 07 - Delta é negativo')
    } else {
        return console.log("Exercício 07 - ", vetor)
    }
}
bhaskara(4, 2, -6)
bhaskara(7, 3, 4)

/*08 - Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

let pontuacao_por_jogo = [10, 20, 20, 8, 25, 3, 0, 30, 1] 

const verificarJogos = function () {
    for (let recorde in pontuacao_por_jogo){
        console.log (recorde, pontuacao_por_jogo[recorde])
    }
}

verificarJogos(pontuacao_por_jogo)
