//recurso do ES6

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
            }
}

const { nome, idade } = pessoa //dá acesso aos dados dentro de pessoa, através de 'nome' e 'idade'
console.log (nome, idade)

const {nome: n, idade: i} = pessoa //dá acesso aos dados dentro de pessoa, através de 'n' e 'i'
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa // não dá acesso a endereco, somente  a logradouro e numero
console.log(logradouro, numero, cep)

//const { conta: { ag, num}} = pessoa //conta não existe, e o 'filho' ag não pode ser encontrado. Cuidado para ter certeza com relação ao caminho
//console.log(ag, num)
