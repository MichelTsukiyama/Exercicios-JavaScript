function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Smartphone', 5000.00))
console.log(criarProduto('Bala de hortelã',0.25))