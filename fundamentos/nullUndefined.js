let valor //não incializa, undefined
console.log(valor)
//console.log(valor2) //valor2 is not defiened

valor = null //ausência de valor
console.log(valor)

//console.log(valor.toString()) //Erro! Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
