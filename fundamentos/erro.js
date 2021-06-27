function tratarErroELancar (erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function emCaixaAlta(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch  (e) {
        tratarErroELancar(e)
    } finally { //finaly é sempre executado
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
emCaixaAlta(obj)