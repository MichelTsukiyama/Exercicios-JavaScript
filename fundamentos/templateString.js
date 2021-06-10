const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!' // concatenação

//Aceita quebras de linhas
const template = `
    Olá
    ${nome}!`

console.log(concatenacao)
console.log(template)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //caixa alta
console.log(`Ei... ${up('cuidado')}!`)