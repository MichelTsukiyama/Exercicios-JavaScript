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