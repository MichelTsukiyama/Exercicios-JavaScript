const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 //adicionou um item ao índice 4 que não existia
console.log(valores)
console.log(valores.length)//verifica quantos indices há no array

valores.push({id: 3}, false, null, 'teste')// aceita diversos tipos de dados
console.log(valores)

console.log(valores.pop()) //remove o último índice do array e seu conteúdo
delete valores[0] //exclui o conteúdo do indice
console.log(valores)

console.log(typeof valores) // array é um objeto

