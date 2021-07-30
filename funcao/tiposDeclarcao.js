console.log(soma(3, 4)) // funciona somente com func decl, o interpretador carrega todas as funções antes de rodar a 1ª linha

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4)) //só functiona se estiver depois da "variavel"(var, let, const) em que a função está armazenada.

//named function expression
const mult = function mult (x, y) {
    return x * y
}

console.log(mult(3, 4))//só functiona se estiver depois da "variavel"(var, let, const) em que a função está armazenada.