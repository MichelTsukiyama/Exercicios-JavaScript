/*const imprimirResultado = function (nota) {
    if(nota >= 7) {
        console.log ('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!!')*/ //fracamente tipado, recebe a string mas não dá para avaliar se é >= 7, sendo o resultado 'false' 'Reprovado!'

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim 
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else { 
        console.log('Nota inválida')
    }
    console.log('fim')

}

imprimirResultado(9.5)
imprimirResultado(7)
imprimirResultado(6.99)
imprimirResultado(2)
//imprimirResultado('AA') não aceitou a string, diz que 'entre' não é uma function. Ainda não entendi direito o por quê disso.
