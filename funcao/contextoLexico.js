const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

//Quando uma function é declarado em JS, ela carrega o contexto em que foi declarada/escrita



