//Var é visivel mesmo dentro de blocos, pode ser acessado e alterado por 3ºs
{
    {
        var sera = 'Será??'
    }
}
console.log(sera)

//Var dentro de uma function, é acessível somente na function

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //local si not defined

//teste
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora = ', numero)