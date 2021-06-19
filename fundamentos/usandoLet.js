var numero = 1
{
    let numero = 2//caso não tenha a variavel 'numero' dentro do bloco, ele busca fora
    console.log('dentro = ', numero) 
}

console.log('fora = ', numero)