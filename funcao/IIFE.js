// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
    var a = 1
    let  b = 2
    const c  = 3
    console.log(a,b,c)
})()

//console.log(a,b,c)