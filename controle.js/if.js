function boaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

boaNoticia(8.1)
boaNoticia(6.1) //não executa má notícia....sad...

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade que ... ', valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
//false^^
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
//true^^

function teste1(num) {
    if (num > 7) //JS executa somente uma sentença sem usar bloco '{}'
        console.log(num)
        console.log('Final') //é executado sem nenhuma relação com a condição
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { // o ';' está sendo uma sentença de código vazia, e o console.log não faz parte da condição
        console.log(num)
    }
}

teste2(6)
teste2(8)