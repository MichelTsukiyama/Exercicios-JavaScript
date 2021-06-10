const escola = "Teste"

console.log(escola.charAt(4)) //e
console.log(escola.charAt(5)) // nada
console.log(escola.charCodeAt(3)) // Valor tabela Unicode
console.log(escola.indexOf('3')) // -1 não tem
console.log(escola.indexOf('e')) // retornou apenas o índice do 1º 'e'

console.log(escola.substring(1)) //escreveu toda string com exceção do índice 0
console.log(escola.substring(0, 3)) //escreveu do índice 0 ao 3

console.log('Escola '.concat(escola).concat('!')) // concatenar
console.log(escola.replace('T', '7')) // substitui

console.log('Ana, Maria, Pedro'.split(','))// separa os termos pela ',' e transforma em um array

//aprender regex pode ser muito útil