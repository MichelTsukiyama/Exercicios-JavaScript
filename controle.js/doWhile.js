function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 

do { //executa pelo menos uma vez, é a única estrutura que a expressão está depois do bloco
    opcao = getInteiroAleatorioEntre( -1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while(opcao != -1)

console.log('Até a próxima')